# example-msw-vite

A real-world example of using [MSW](https://mswjs.io/) with [Vite](https://vitejs.dev/) and [@tanstack/react-query](https://tanstack.com/query/v4).

## Getting started

Clone the repository and install the dependencies:

```sh
git clone https://github.com/raisiqueira/example-msw-vite
cd example-msw-vite
pnpm install
```

Start the development server:

```sh
pnpm dev
```

### Testing the project

Run the tests:

```sh
pnpm run test
```

## Project structure

> This project is based on the [Eruption template](https://github.com/eruptionjs/core).

This project is a simple example of a React application that uses [MSW](https://mswjs.io/) to mock API requests. All requests are mocked in the `src/mocks/handlers.ts` file.

To fetch data from the API, the application uses the `@tanstack/react-query` (former `react-query`).

The MSW files are located in the `mocks` folder. The `src/mocks/browser.ts` file is the entry point for the MSW worker. The `src/mocks/handlers.ts` file contains the handlers for the mocked requests.

The other related files are:

- `src/App/services`: the file that contains an axios instance to fetch data from the API.
- `src/App/hooks`: the file that contains the `useQuery` hook to fetch data from the API.
- `src/App/components/HLTVMatches`: the file that contains the component that renders the fetched data.

# License

MIT @ Raí Siqueira
