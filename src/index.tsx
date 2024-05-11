import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Portal from './Portal';

import { PrivyProvider } from '@privy-io/react-auth';
import { RepositoryPage } from './RepositoryPage';
import { AttestorPage } from './AttestorPage';


const router = createBrowserRouter([
  {
    path: "/portal",
    element: (
      <Portal />
    ),
    children: [
      {
        path: "/portal/attestors",
        element: <AttestorPage />,
      },
      {
        path: "repositories",
        element: <RepositoryPage />,
      }
    ]
  },

  {
    path: "/",
    element: <App />,
  },
]);

const privyAppId = process.env.REACT_APP_PRIVY_APP_ID || 'clv8gazq204exi1o8ryjhe3xw';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>


    <PrivyProvider
      appId={privyAppId}
      config={{
        // Display email and wallet as login methods
        loginMethods: ['email', 'wallet'],
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://pbs.twimg.com/profile_images/1785127184170106880/gDB0YSSW_400x400.jpg',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >

      <RouterProvider router={router} />
    </PrivyProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
