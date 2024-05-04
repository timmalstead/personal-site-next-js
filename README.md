# personal-site-next-js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Standalone output

Note that this project makes use of the relatively new Next.js feature [standalone output](https://nextjs.org/docs/pages/api-reference/next-config-js/output). While this has not presented any problems thus far, be aware that it may need to be turned off if there are issues.

### Turning off Standalone Output

Remove the `output` key in [next.config.mjs](./next.config.mjs)
Change the `start` script in [package.json](package.json) to `"PORT=8080 next start"`
Change the `CMD` directive at the end of [Dockerfile](Dockerfile) to `CMD npm run start`

> Note that there may be additional work to be done in the `Dockerfile` to change things back to a "traditional" Next.js setup, but changing the `CMD` directive is probably a good start.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
