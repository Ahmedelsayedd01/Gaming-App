import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Streams from "./pages/Streams";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/browse",
    element: (
      <>
        <Nav />
        <Browse />
        <Footer />
      </>
    ),
  },
  {
    path: "/details",
    element: (
      <>
        <Nav />
        <Details />
        <Footer />
      </>
    ),
  },
  {
    path: "/streams",
    element: (
      <>
        <Nav />
        <Streams />
        <Footer />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Nav />
        <Profile />
        <Footer />
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
