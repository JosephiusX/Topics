import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Link
} from "react-router-dom";
import ErrorPage from "./error";
import {
  Page, 
  Add as AddTopic
} from './Topics'

<Link to="/create" >Create</Link>



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
            path: "/create",
            element: <AddTopic />
          },
          {
            path: "/edit/:id",

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