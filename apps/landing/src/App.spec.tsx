import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  // TODO fix type err / migrate to vitest
  // expect(linkElement).toBeInTheDocument();
});
