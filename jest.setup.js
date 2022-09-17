import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { server } from "./src/mocks/server";

const originalError = console.error;

beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      )
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
  return server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  console.error = originalError;
  return server.close();
});
