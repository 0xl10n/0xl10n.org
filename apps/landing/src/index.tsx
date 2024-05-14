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
import { PROJECT_DATA } from "./data/project";
import { LoginPage } from "./pages/LoginPage";
import { Repository } from "./domain/repository";
import { REPO_DATA } from "./data/repo";
import { Project } from "./domain/project";
import { RepositoryPage } from "./pages/RepositoryPage";
import { ProjectLayout, TranslateLayout } from "./Layout";

const router = createBrowserRouter([
  {
    path: "/portal",
    element: <Portal />,
    children: [
      {
        path: "attestors",
        element: <ProjectLayout><AttestorPage /></ProjectLayout>,
      },
      {
        path: "translate",
        element: <ProjectLayout><TranslatePage /></ProjectLayout>,
      },
      {
        path: "login",
        element: <ProjectLayout><TranslatePage /></ProjectLayout>,

      },
      {
        path: "projects/:projectId",
        element: <ProjectLayout><ProjectPage /></ProjectLayout>,
        loader: ({ params }: { params: any }) => {
          console.log('params', params)
          return {
            project: PROJECT_DATA.find((project: Project) => project.id === params.projectId),
            repos: REPO_DATA.filter((repo: Repository) => repo.projectId === params.projectId),
          };
        }
      },
      {
        path: "repositories/:repoId",
        element: <TranslateLayout><RepositoryPage /></TranslateLayout>,
        loader: ({ params }: { params: any }) => {
          console.log('params', params)
          return {
            repository: REPO_DATA.find((repo: Repository) => repo.id === params.repoId),
          };
        }
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
