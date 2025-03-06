#!/bin/sh

/app/tailscaled --tun=userspace-networking --socks5-server=localhost:1055 &
echo 'Tailscale daemon started'

/app/tailscale up --auth-key=${TAILSCALE_AUTHKEY} --hostname=cloudrun-app --ssh && echo 'Tailscale client connected'

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
NODE_ENV=production PORT=8080 HOSTNAME=0.0.0.0 ALL_PROXY=socks5://localhost:1055/ NODE_OPTIONS='--disable-warning=DeprecationWarning' node server.js
