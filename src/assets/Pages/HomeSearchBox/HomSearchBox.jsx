import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import { setFlightType } from "../../Slice/Features/flightSlice";
import FlightSearch from "../FlightSearch";
import FlightBoxFooter from "../FlightBoxFooter";
import useWindowSize from "../../Common/useWindowSize";
import PlaneIcon from "../../svg/airPlane.svg?react";
import Hotel from "../../svg/hotel.svg?react";
import Holidays from "../../svg/Holidays.svg?react";

const HomSearchBox = () => {
  const dispatch = useDispatch();
  const { isMobile } = useWindowSize();
  const flightType = useSelector((state) => state.flight.flightType);
  const [selected, setSelected] = useState("air");

  const handleClick = (label, value) => {
    dispatch(setFlightType(value));
  };

  const tabStyle = {
    bgcolor: "var(--darkGray-color)",
    color: "white",
    borderRadius: "4.75px",
    px: 2.2,
    py: 1,
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: 500,
    fontSize: { lg: "16.15px", xs: "13.6px" },
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          gap: 0.4,
          mb: 3,
          justifyContent: isMobile && "space-between",
        }}
      >
        {menuItems.map(({ id, label, icon, hideOnMobile }) =>
          isMobile && hideOnMobile ? null : (
            <Box key={id} sx={headerFlexStyle} onClick={() => setSelected(id)}>
              <Box
                sx={{
                  opacity: selected === id ? 1 : 0.5,
                }}
              >
                {icon}
              </Box>

              <Typography
                sx={{
                  color: selected === id ? "white" : "#FFB6A6",
                  fontSize: { xs: "13px", lg: "15.89px" },
                }}
              >
                {label}
              </Typography>
            </Box>
          )
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 2,
          justifyContent: { xs: "center", lg: "left" },
        }}
      >
        {[
          { label: "One Way", value: "One Way" },
          { label: "Round Way", value: "Return" },
          { label: "Multi City", value: "Multi City" },
        ].map((tab) => (
          <Typography
            key={tab.label}
            sx={{
              ...tabStyle,
              bgcolor:
                flightType === tab.value
                  ? "var(--darkGray-color)"
                  : "transparent",
              color:
                flightType === tab.value ? "white" : "var(--darkGray-color)",
              width: "fit-content",
              whiteSpace: "nowrap",
            }}
            onClick={() => handleClick(tab.label, tab.value)}
          >
            {tab.label}
          </Typography>
        ))}
      </Box>

      <Box>
        <FlightSearch />
      </Box>
      <Box>{!isMobile && <FlightBoxFooter />}</Box>
    </Container>
  );
};

export default HomSearchBox;

const menuItems = [
  { id: "air", label: "Air Ticket", icon: <PlaneIcon /> },
  { id: "hotel", label: "Hotel", icon: <Hotel /> },
  { id: "holidays", label: "Holidays", icon: <Holidays /> },
  { id: "pnr", label: "PNR Share", icon: <Holidays />, hideOnMobile: true },
  { id: "group", label: "Group Fare", icon: <Holidays />, hideOnMobile: true },
  { id: "visa", label: "Visa", icon: <Holidays />, hideOnMobile: true },
];

const headerFlexStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  bgcolor: "var(--primary-color)",
  px: 1.5,
  py: 0.7,
  borderRadius: "4.85px",
  // width: "100px",
  justifyContent: "center",
  cursor: "pointer",
};
