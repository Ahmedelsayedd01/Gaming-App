import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import Streams from "./pages/Streams";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/streams",
        element: <Streams />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
