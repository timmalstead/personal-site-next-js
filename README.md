# personal-site-next-js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Noto_Sans, a custom Google Font.

## Standalone output

Note that this project makes use of the relatively new Next.js feature [standalone output](https://nextjs.org/docs/pages/api-reference/next-config-js/output). While this has not presented any problems thus far, be aware that it may need to be turned off if there are issues.

### Turning off Standalone Output

Remove the `output` key in [next.config.mjs](./next.config.mjs)
Change the `start` script in [package.json](package.json) to `"PORT=8080 next start"`
Change the `CMD` directive at the end of [Dockerfile](Dockerfile) to `CMD npm run start`

> Note that there may be additional work to be done in the `Dockerfile` to change things back to a "traditional" Next.js setup, but changing the `CMD` directive is probably a good start.

## Preview env authorization

To view the preview env, you need to use a token obtained from `gcloud auth print-identity-token` and add it as an `authorization` header with a value of `Bearer {{TOKEN}}`

Or proxy it using `npm run proxy:preview`.

Note that for this proxy, you will need to install and be signed into the [gcloud cli utility](https://cloud.google.com/sdk/docs/install).

## CI/CD

This project use [CircleCi](https://circleci.com/) for CI/CD.

This is setup using [config.yml](.circleci/config.yml) in the .circleci directory.

Pushing to the `main` branch on the [GitHub repo for this project](https://github.com/timmalstead/personal-site-next-js) will trigger a pipeline connected to the [IAC repo for this project](https://github.com/timmalstead/personal-site-gcp-infra) and will automatically deploy the latest commit to the preview env.

Deploys to prod are triggered manually.

## Page Data

Persistent data for this project is created using [Google's Firestore](https://firebase.google.com/docs/firestore) database. This is used to inject JSON controlled components into the headless app.

There is also a [Firestore mock](app/@data/firestoreMock.js) used for local development.

To make use of the local Firestore mock, start a dev process using the local env var `USE_TESTING_FIRESTORE=true`.

This was instituted as I thought it would be easier and less complex than using the Firestore emulator.

## Infra

This project uses [Pulumi](https://www.pulumi.com/) to manage infrastrcture as code (IAC).

This is managed by a seperate repo of [Pulumi code](https://github.com/timmalstead/personal-site-gcp-infra) tailored to this specific project.

## Secrets

This project uses the [1Password CLI](https://developer.1password.com/docs/cli/get-started/) and a [1Password Service Account](https://developer.1password.com/docs/service-accounts/) to manage secrets locally, for CI/CD, preview environments and for production.

To template secrets locally, make sure that you are [signed into the proper service account](https://developer.1password.com/docs/service-accounts/use-with-1password-cli/#get-started) and run `npm run secrets:local`.

This will save `.env` at the root level of this project and allow you to use needed secrets for local development.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
