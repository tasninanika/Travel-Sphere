import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Blogs from "../pages/blog/Blogs";
import Destination from "../pages/destination/Destination";
import Contact from "../pages/contact/Contact";
import Home from "../components/Home";
import Login from "../pages/login/Login";
import Booking from "../pages/booking/Booking";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/destination", Component: Destination },
      { path: "/blogs", Component: Blogs },
      { path: "/contact", Component: Contact },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/booking", Component: Booking },
    ],
  },
]);

export default router;
