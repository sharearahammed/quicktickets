import React from "react";
import { Box, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useDispatch, useSelector } from "react-redux";
import { decrementPassenger, incrementPassenger } from "../../Slice/Features/flightSlice";

const Passenger = () => {
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.flight.passengers);
  const flightType = useSelector((state) => state.flight.flightType);

  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        width: flightType === "Multi City" ? "211px" :"201px",
        px: 2,
        py: 2,
        borderRadius: "5px",
      }}
    >
      {passengers.map((passenger) => (
        <Box
          key={passenger.type}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography sx={typographtStyle}>
            {passenger.type === "ADT"
              ? "Adult(12+ years)"
              : passenger.type === "CNN"
              ? "Children(2-11 years)"
              : "Infant(Under 2 years)"}
          </Typography>
          <Box sx={flexStyle}>
            <RemoveCircleIcon
              onClick={() =>
                dispatch(decrementPassenger({ type: passenger.type }))
              }
            />
            <Typography sx={typographtStyle}>{passenger.count}</Typography>
            <AddCircleIcon
              onClick={() =>
                dispatch(incrementPassenger({ type: passenger.type }))
              }
            />
          </Box>
        </Box>
      ))}

      <Box
        sx={{ display: "flex", justifyContent: "flex-end", flexBasis: "auto" }}
      >
        <Typography
          sx={{
            ...typographtStyle,
            bgcolor: "var(--primary-color)",
            color: "white",
            px: 2,
            py: 0.5,
            borderRadius: "5px",
          }}
        >
          Done
        </Typography>
      </Box>
    </Box>
  );
};

export default Passenger;

const typographtStyle = {
  fontSize: "12px",
  fontWeight: "500",
};

const flexStyle = {
  display: "flex",
  gap: 1,
  alignItems: "center",
};
