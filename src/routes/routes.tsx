import { createBrowserRouter } from "react-router-dom";
import { routeNames } from "./routeNames";
import App from "../App";
import { HomePage } from "../modules/Home/HomePage";

export const router = createBrowserRouter([
  {
    path: routeNames.Inicio,
    element: <App />,
    children: [
      {
        path: routeNames.Inicio,
        element: <HomePage />,
      },
    ],
  },
]);
