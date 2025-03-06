FROM node:22.14.0-alpine3.21 AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

RUN addgroup --gid 1001 nodejs
# Don't want to run as a system user, so I can log into the container
RUN adduser --ingroup nodejs --disabled-password nextjs 

# Taken from https://tailscale.com/kb/1108/cloudrun
# Copy the tailscale binaries
COPY --from=docker.io/tailscale/tailscale:stable /usr/local/bin/tailscaled /app/tailscaled
COPY --from=docker.io/tailscale/tailscale:stable /usr/local/bin/tailscale /app/tailscale

# Do we need the ca-certificates like in the demo? I don't think so

# Need to set the correct permissions, or the tailscaled daemon setup will fail
RUN mkdir -p /var/run/tailscale /var/cache/tailscale /var/lib/tailscale
RUN chown nextjs:nodejs /var/run/tailscale /var/cache/tailscale /var/lib/tailscale

# Copying the start script which includes tailscale setup
COPY --from=builder /app/scripts/start.sh ./
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# give full app folder access to nextjs user
RUN chown nextjs:nodejs -R /app

USER nextjs

EXPOSE 8080

# Run the start script to start tailscale and the nextjs app, env vars are passed into the running process
CMD ["sh", "start.sh"]
