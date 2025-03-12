import { createBrowserRouter, RouterProvider } from "react-router";
import useWindowSize from "../Common/useWindowSize";
import Home from "../Pages/Home";
import FlightAfterSearch from "../Pages/FlightAfterSearch/FlightAfterSearch";
import FlightDetails from "../Pages/FlightDetails/FlightDetails";
import FlightOneWaySearch from "../Pages/FlightOneWaySearch/FlightOneWaySearch";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <FlightAfterSearch />,
        },
        
      ],
    },
    {
      path: "/flight-after-search",
      element: <FlightAfterSearch />,
    },
    {
      path: "/flight-details",
      element: <FlightDetails />,
    },
    {
      path:"/flight-oneway-search",
      element:<FlightOneWaySearch />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
