import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Portal from "./Portal";

import { PrivyProvider } from "@privy-io/react-auth";

import { AttestorPage } from "./AttestorPage";
import { TranslatePage } from "./pages/TranslatePage";
import { ProjectPage } from "./pages/ProjectPage";
import { PrivyWrapper } from "./PrivyWrapper";

const router = createBrowserRouter([
  {
    path: "/portal",
    element: <Portal />,
    children: [
      {
        path: "attestors",
        element: <AttestorPage />,
      },
      {
        path: "translate",
        element: <TranslatePage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectPage />,
      },
    ],
  },

  {
    path: "/",
    element: <App />,
  },
]);


const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <PrivyWrapper
    >
      <RouterProvider router={router} />
    </PrivyWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
