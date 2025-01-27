This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Run `npm i`

2. Add .env.local file with variable STORYBLOK_PREVIEW_ACCESS_TOKEN.

3. Run the development server: `npm run dev`

4. You should now be able to access http://localhost:3000/home in your browser.

5. If you also want to preview your local environment in the Storyblok Visual Editor, you need to configure localhost to use https.
   1. Install the proxy: `sudo npm install -g local-ssl-proxy`
   2. Run the proxy: `npm run https`
   3. Test the proxy by browsing to https://localhost:3001/home

## Storyblok space configuration

This repository assumes a Storyblok space with the following settings and content:

- Visual Editor location: https://localhost:3001/api/draft?slug=
- Blocks: Page and Feature (other blocks are not implemented)
- Content: a Home page (slug=home) of content type 'Page', with a 'Feature' block.

## Running a production build locally

In order to run the production build locally, execute the following commands:

- `npm run build`
- `npm start`

This will create a production build, including optimizations. The [[...slug]] route will be static. Only the first request will render the page (with SSR). Subsequent requests will use the cached static file.
