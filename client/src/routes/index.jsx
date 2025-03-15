import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Startups from "../pages/startups";
import Investors from "../pages/Investors";
import AboutPage from "../pages/AboutPage";
import LearnMore from "../pages/LearnMore";
import Events from "../pages/Events";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/startups",
    element: <Startups />,
  },
  {
    path: "/investors",
    element: <Investors />,
  },
  {
    path: "/learn-more",
    element: <LearnMore/>,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/events",
    element: <Events />,
  }
]);
