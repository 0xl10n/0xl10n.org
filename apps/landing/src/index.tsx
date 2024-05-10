import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { hydrate } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const dom = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (rootElement?.hasChildNodes()) {
  hydrate(dom, rootElement);
} else {
  const root = createRoot(rootElement!);
  root.render(dom);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
