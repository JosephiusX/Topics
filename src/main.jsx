import React from "react";
import ReactDOM from "react-dom/client";
import {Route, Switch, RouterProvider, BrowserRouter} from "react-router-dom";
import {TopicsPage, ErrorPage } from "./Pages"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <TopicsPage />,
//     errorElement: <ErrorPage />,
//   }
// ]);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      {/* <Header /> */}
      <Switch> 
        {/* TOPICS */}
        <Route path="/" component={TopicsPage} exact={true} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
