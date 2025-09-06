import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root.jsx";
import Login from "../pages/Login.jsx";
import PublicHomepage from "../pages/PublicHomepage.jsx";
import AtsChecker from "../pages/AtsChecker.jsx";
import LinkdlnAuto from "../pages/LinkdlnAuto.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import AtsScore from "../pages/AtsScore.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // This indicates it matches the exact path '/'
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <PublicHomepage/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ats_checker",
        element: <AtsChecker />,
      },
      {
        path: "/linkedin_autoapply",
        element: <LinkdlnAuto />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
       {
        path: "/ats_score",
        element: <AtsScore />,
      }
    ],
  },
]);

export default appRouter;
