import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTopic from "./components/AddTopic.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import UpdateTopic from "./components/UpdateTopic.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "/Addtopic",
    element: (
      <>
        <Navbar />
        <AddTopic />
      </>
    ),
  },
  {
    path: "/ProjectDetails",
    element: (
      <>
        <Navbar />
        <ProjectDetails />
      </>
    ),
  },
  {
    path: "/UpdateTopic/:id",
    element: (
      <>
        <Navbar />
        <UpdateTopic />
      </>
    ),
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
