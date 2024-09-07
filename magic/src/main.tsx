import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import Homepage from "./routes/homepage.tsx";
import { Search } from "./components/Search.tsx";
import { NewPrompt } from "./components/Create.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  {
    path: "/homepage",
    element: <Homepage />,
    children: [
      {
        path: "prompts/",
        element: <Search />,
      },
      {
        path: "prompt/",
        element: <NewPrompt />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
