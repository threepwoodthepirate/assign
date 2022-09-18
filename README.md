This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can view the project at https://assign-delta.vercel.app [here](https://assign-delta.vercel.app)

## Getting Started

You'll need to create a file in the root directory of the project

Filename: .env.local
content of file should be

```bash
NEXT_PUBLIC_API_MOCKING=false
API_URL="[your api url here]"
API_KEY="[your api key here]"
```

Set NEXT_PUBLIC_API_MOCKING to true in case you doesn't have an api key. Then you should be able to run the project with mocked data.

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can also build the project locally with 'yarn build' and view the project with 'npx next start -p 4000'.

## Packages used

The project is using next.js to statically render the pages and fetching list of data in backend.
Tailwind css for styling.
mwsjs for mocking data.
react-testing-library /jest for testing.

## User Stories

- Responsive design
- Somewhat modern CSS w/ grid and clamp.
- Filter by name and office.
- Enable switch between grid and plain list.
- Using TypeScript.
- Integration test
- Unit test

Did also a publish to a public repo.
