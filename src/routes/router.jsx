import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Test from "../pages/Test/Test";
import Test2 from "../pages/Test2/Test2";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/1",
        element: <Test2 />,
      },
      {
        path: "/2",
        element: <Test />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
