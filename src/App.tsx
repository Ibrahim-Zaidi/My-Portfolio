import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./views/Hero/Hero";
import AppLayout from "./views/AppLayout/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/about",
          element: <div>About Page</div>,
        },
        {
          path: "/skills",
          element: <div>Skills Page</div>,
        },
        {
          path: "/projects",
          element: <div>Projects Page</div>,
        },
        {
          path: "/contact",
          element: <div>Contact Page</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
