import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import ManageTask from "@/pages/ManageTask";
import NotFoundPage from "@/pages/NotFoundPage";
import Layout from "./Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "manage-task",
        element: <ManageTask />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
