import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./views/Hero/Hero";
import AppLayout from "./views/AppLayout/AppLayout";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Contact from "./Contact/Contact";
import Projects from "./views/Projects/Projects";
// import Projects from "./views/Projects/Projects";
// import Contact from "./views/Contact/Contact";

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
          element: <About />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
