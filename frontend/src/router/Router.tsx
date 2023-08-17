import { createBrowserRouter } from "react-router-dom";
import IntroPage from "../pages/IntroPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: "",
      children: [
        {
          path: "/",
          element: <IntroPage />,
        },
    ],
},
]);