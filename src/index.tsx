import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import { ErrorPage } from './pages/ErrorPage';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home/Home';
import { CV } from './pages/CV';
import { Contact } from './pages/Contact';


const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "portfolio/",
        element: <Portfolio />,
      },
      {
        path: "cv/",
        element: <CV />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

