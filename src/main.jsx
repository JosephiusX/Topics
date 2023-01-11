import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

import ErrorPage from "./error";
import {Page} from './Topics'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/create_topic",
          },
          {
            path: "/edit_topic/:id",

          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);