import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import HomePage from "@/pages/HomePage";
import ManageTask from "@/pages/ManageTask";
// Instead of this:
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "dashboard",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <ManageTask />,
      },
    ],
  },
]);

export default router;