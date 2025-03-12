import React from "react";
import HomSearchBox from "./HomeSearchBox/HomSearchBox";
import { Box, Container } from "@mui/material";
import FlightAfterSearch from "./FlightAfterSearch/FlightAfterSearch";
import FlightDetails from "./FlightDetails/FlightDetails";
import FlightOneWaySearch from "./FlightOneWaySearch/FlightOneWaySearch";

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          my: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          // height: "130vh",
        }}
      >
        <HomSearchBox />
      </Box>
      <FlightAfterSearch />
      {/* <FlightDetails/> */}
      <FlightOneWaySearch />
    </Container>
  );
};

export default Home;
