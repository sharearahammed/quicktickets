import React from "react";
import HomSearchBox from "./HomeSearchBox/HomSearchBox";
import { Box, Container } from "@mui/material";
import FlightAfterSearch from "./FlightAfterSearch/FlightAfterSearch";
import FlightDetails from "./FlightDetails/FlightDetails";
import FlightOneWaySearch from "./FlightOneWaySearch/FlightOneWaySearch";
import RecentSearch from "./RecentSearch/RecentSearch";
import Discount from "./Discount/Discount";
import FlightPage from "./AirMap/FlightCard";

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          my: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          // height: "130vh",
        }}
      >
        {/* <HomSearchBox /> */}
        <FlightPage/>
        
      </Box>
      {/* <RecentSearch/> */}
      {/* <Discount/> */}
      {/* <FlightAfterSearch /> */}
      {/* <FlightDetails/> */}
      {/* <FlightOneWaySearch /> */}
    </Container>
  );
};

export default Home;
