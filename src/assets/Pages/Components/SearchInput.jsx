import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { setFromAirport, setToAirport } from "../../Slice/Features/flightSlice";

// Function to fetch airport suggestions
const fetchAirportSuggestions = async (keyword) => {
  if (keyword.length < 3) return []; // No API call if keyword < 3 chars

  const url = `https://flyfar-int-v2-user-panel.de.r.appspot.com/api/v1/admin/airports/search-suggestion`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyword }),
  });

  const data = await response.json();
  return data?.data || [];
};

const SearchInput = ({ showInput, type, index }) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const flightType = useSelector((state) => state.flight.flightType);
  const [fromData, setFromData] = useState({
    resultId: "01",
    result: [
      {
        id: "01",
        code: "DAC",
        airportName: "Hazrat Shahjalal Intl Airport",
        cityName: "Dhaka",
        countryName: "BANGLADESH",
        countryCode: "BD",
        address: "Hazrat Shahjalal Intl Airport",
      },
    ],
    suggestion: [],
  });

  const [toData, setToData] = useState({
    resultId: "01",
    result: [
      {
        id: "01",
        code: "DXB",
        airportName: "Dubai International Airport",
        cityName: "Dubai",
        countryName: "United Arab Emirates",
        countryCode: "UAE",
        address: "Dubai, United Arab Emirates",
      },
    ],
    suggestion: [],
  });

  const handleSelectAirport = (airport, type, index) => {
    if (!airport) return;
    console.log("airport", airport);
    if (type === "departure") {
      dispatch(setFromAirport({ airport, index }));
    } else {
      dispatch(setToAirport({ airport, index }));
    }
  };

  const airportData = type === "departure" ? fromData : toData;

  const { data: apiData, isLoading } = useQuery({
    queryKey: ["airportSuggestions", keyword],
    queryFn: () => fetchAirportSuggestions(keyword),
    enabled: keyword.length >= 3,
    staleTime: 60000,
  });

  const suggestions = apiData?.[0]?.result
    ? [apiData[0].result, ...apiData[0].suggestion]
    : [];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 64,
        right: 1,
        zIndex: 10,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      {showInput && (
        <Box>
          <input
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="Search by code, city, country"
            style={{
              width: flightType === "Multi City" ? "508px" : "351px",
              padding: "15px",
              border: "none",
              borderBottom: "2px solid lightgray",
            }}
            onFocus={(e) => (e.target.style.outline = "none")}
            onClick={(e) => e.stopPropagation()}
          />

          {isLoading && <Typography sx={{ p: 2 }}>Loading...</Typography>}

          {/* Render the result data */}
          {keyword.length < 3
            ? [...airportData.result, ...airportData.suggestion].map(
                (airport) => (
                  <Box
                    key={airport.id}
                    onClick={() => handleSelectAirport(airport, type, index)}
                    sx={{
                      bgcolor: "white",
                      px: 2,
                      py: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: "600" }}>
                        {airport.cityName}, {airport.countryName}
                      </Typography>
                      <Typography sx={{ fontSize: "15px", color: "gray" }}>
                        {airport.address}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{ fontWeight: "700", color: "var(--primary-color)" }}
                    >
                      {airport.code}
                    </Typography>
                  </Box>
                )
              )
            : suggestions.map((airport) => (
                <Box
                  onClick={() => handleSelectAirport(airport, type, index)}
                  key={airport.id}
                  sx={{
                    bgcolor: "white",
                    px: 2,
                    py: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: "600" }}>
                      {airport.cityName}, {airport.countryName}
                    </Typography>
                    <Typography sx={{ fontSize: "15px", color: "gray" }}>
                      {airport.name}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ fontWeight: "700", color: "var(--primary-color)" }}
                  >
                    {airport.code}
                  </Typography>
                </Box>
              ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchInput;
