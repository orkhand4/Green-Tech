import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Startups from "../pages/startups";
import Investors from "../pages/Investors";
import AboutPage from "../pages/LearnMore";

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
    element: <AboutPage />,
  }
]);

//   {
//     path: "/productInfo",
//     element: <ProductDetail />,
//     children: [
//       {
//         path: "",
//         element: <ProductDetailInfo />,
//       },
//       {
//         path: "reviews",
//         element: <ProductReviews />,
//       },
//     ],
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/contact",
//     element: <ContactPage />,
//   },
// ]);
