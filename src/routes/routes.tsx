import { createBrowserRouter } from "react-router-dom";
import { routeNames } from "./routeNames";
import App from "../App";
import { HomePage } from "../modules/Home/HomePage";
import { ProjectsPage } from "../modules/Projects/ProjectsPage";
import { AboutMePage } from "../modules/AboutMe/AboutMePage";

export const router = createBrowserRouter([
  {
    path: routeNames.Inicio,
    element: <App />,
    children: [
      {
        path: routeNames.Inicio,
        element: <HomePage />,
      },
      {
        path: routeNames.Projects,
        element: <ProjectsPage />,
      },
      {
        path: routeNames.AboutMe,
        element: <AboutMePage />,
      },
    ],
  },
]);
