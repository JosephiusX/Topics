import React from "react";
import ReactDOM from "react-dom/client";
import {Route, Switch, RouterProvider, BrowserRouter} from "react-router-dom";
import {TopicsPage, ErrorPage } from "./Pages"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
