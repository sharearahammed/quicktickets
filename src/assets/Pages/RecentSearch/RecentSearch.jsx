import { Box, Container, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Plane from "../../svg/plane.svg?react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./recentSearch.css"

const RecentSearch = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Box sx={{pr:1}}>
        <Typography sx={{ fontSize: "16.13px", mb: 1 }}>
          Your Recent Search
        </Typography>
        <Box>
          {/* <Box sx={{ display: "flex", gap: 2 }}> */}
          <Slider {...settings}>
            {flightData.map((flight, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: "10px",
                  bgcolor: "white",
                  px: 1.5,
                  py: 1,
                  width: "180px",
                  borderRadius: "6.97px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        sx={{
                          color: "#202124",
                          fontSize: "13.24px",
                          fontWeight: "700",
                        }}
                      >
                        {flight.from}
                      </Typography>
                      <ArrowRightAltIcon />
                      <Typography
                        sx={{
                          color: "#202124",
                          fontSize: "13.24px",
                          fontWeight: "700",
                        }}
                      >
                        {flight.to}
                      </Typography>
                    </Box>
                    <Plane />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "13.24px",
                      color: "#595959",
                      fontWeight: 400,
                    }}
                  >
                    {flight.date}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "var(--primary-color)",
                    fontSize: "10.75px",
                    fontWeight: 400,
                  }}
                >
                  {flight.passengers}
                </Typography>
              </Box>
            ))}
          </Slider>
          {/* </Box> */}
        </Box>
      </Box>
    </Container>
  );
};

export default RecentSearch;

const flightData = [
  {
    from: "DAC",
    to: "JFK",
    date: "29 Mar 23 & 31 Mar 23",
    passengers: "1 ADT, 2 CHD, 1 INF",
  },
  {
    from: "LHR",
    to: "DXB",
    date: "15 Apr 23 & 18 Apr 23",
    passengers: "2 ADT, 1 CHD",
  },
  {
    from: "SIN",
    to: "SYD",
    date: "10 May 23 & 12 May 23",
    passengers: "1 ADT, 1 INF",
  },
  { from: "CDG", to: "JFK", date: "5 Jun 23 & 7 Jun 23", passengers: "3 ADT" },
  {
    from: "DEL",
    to: "LAX",
    date: "20 Jul 23 & 22 Jul 23",
    passengers: "2 ADT, 1 CHD, 2 INF",
  },
  { from: "BKK", to: "HKG", date: "1 Sep 23 & 3 Sep 23", passengers: "1 ADT" },
];
