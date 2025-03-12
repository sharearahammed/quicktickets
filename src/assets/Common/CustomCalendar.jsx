import React, { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Box } from "@mui/material";

const CustomCalendar = ({ date, minDate, handleChange, title }) => {
  const handleSelect = (date) => {
    setSelectedDate(date);
    if (onSelect) onSelect(date);
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 2,
        borderRadius: "5px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Calendar
        date={date}
        minDate={minDate}
        onChange={(selectedDate) => handleChange(selectedDate)}
      />
    </Box>
  );
};

export default CustomCalendar;
