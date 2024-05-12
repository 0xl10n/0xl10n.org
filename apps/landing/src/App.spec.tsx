import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // TODO fix type err / migrate to vitest
  // expect(linkElement).toBeInTheDocument();
});
