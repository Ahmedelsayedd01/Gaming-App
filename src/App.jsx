import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Nav from "./components/navbar/Nav";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import Streams from "./pages/Streams";
import Profile from "./pages/Profile";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/NotFound";

/* Import Animation Library */
import Aos from "aos";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: "/browse",
    element: (
      <>
        <Nav />
        <Browse />
      </>
    ),
  },
  {
    path: "/details",
    element: (
      <>
        <Nav />
        <Details />
      </>
    ),
  },
  {
    path: "/streams",
    element: (
      <>
        <Nav />
        <Streams />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Nav />
        <Profile />
      </>
    ),
  },
]);
function App() {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;