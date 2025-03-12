import {
  Box,
  Grid,
  Button,
  Typography,
  Divider,
  Collapse,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addButton,
  removeButton,
  setCabin,
  setDepartureDate,
  setDepartureDates,
  setFlightType,
  setReturnDate,
  toggleArrivalCalendar,
  toggleDepartureCalendar,
  toggleDepartureCalendars,
  togglePassenger,
} from "../Slice/Features/flightSlice";
import AirplanIconOne from "../svg/AirplaneOne.svg?react";
import AirplanIconTwo from "../svg/AirplaneTwo.svg?react";
import MobileDeparurePlane from "../svg/MobileDeparurePlane.svg?react";
import MobileArrivalPlane from "../svg/MobileArrivalPlane.svg?react";
import CalenderIcon from "../svg/calenderIcon.svg?react";
import SearchIcon from "../svg/searchIcon.svg?react";
import PlaneIcon from "../svg/plane.svg?react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import useWindowSize from "../Common/useWindowSize";
import { useEffect, useState } from "react";
import SearchInput from "./Components/SearchInput";
import Passenger from "./Components/Passenger";
import CustomCalendar from "../Common/CustomCalendar";
import { getFormattedDateParts } from "../Common/Utils";

const FlightSearch = () => {
  const dispatch = useDispatch();
  const { isMobile } = useWindowSize();
  const flightType = useSelector((state) => state.flight.flightType);
  const segmentCount = useSelector((state) => state.flight.segmentCount);
  const fromAirports = useSelector((state) => state.flight.fromAirports);
  const toAirports = useSelector((state) => state.flight.toAirports);
  const normalFromAirport = useSelector(
    (state) => state.flight.normalFromAirport
  );
  const passengers = useSelector((state) => state.flight?.passengers);
  const isPassengerOpen = useSelector((state) => state.flight.isPassengerOpen);
  const cabin = useSelector((state) => state.flight.cabin);
  const [open, setOpen] = useState(false);
  const normalToAirport = useSelector((state) => state.flight.normalToAirport);
  const { studentFare, regularSearch, advanceSearch, umrahFare, seamanFare } =
    useSelector((state) => state.flight);
  const {
    departureDate,
    returnDate,
    openDeparture,
    openArrival,
    openDepartures,
    departureDates,
  } = useSelector((state) => state.flight);
  const defaultDepartureDates =
    departureDates.length > 0 ? departureDates : [new Date()];
  const [showInputs, setShowInputs] = useState({
    normalFrom: false,
    normalTo: false,
    from: [],
    to: [],
  });
  const totalPassengerCount = passengers.reduce(
    (total, passenger) => total + passenger.count,
    0
  );
  const handleClick = () => {
    setOpen(!open);
  };

  const handleReturnFlightSelection = () => {
    dispatch(setFlightType("Return"));
  };

  const handleRadioChange = (event) => {
    dispatch(setCabin(event.target.value));
  };

  useEffect(() => {
    setShowInputs((prev) => ({
      ...prev,
      from: new Array(segmentCount).fill(false),
      to: new Array(segmentCount).fill(false),
    }));
  }, [segmentCount]);

  const toggleInput = (type, index = null) => {
    setShowInputs((prev) => {
      if (index !== null) {
        return {
          ...prev,
          [type]: prev[type].map((val, i) => (i === index ? !val : val)),
        };
      } else {
        return {
          ...prev,
          [type]: !prev[type],
        };
      }
    });
  };

  const generateSegmentsList = (
    flightType,
    fromAirports,
    toAirports,
    normalFromAirport,
    normalToAirport,
    departureDates,
    returnDate
  ) => {
    let segmentsList = [];

    if (flightType === "Multi City") {
      segmentsList.push({
        departure: normalFromAirport.code,
        arrival: normalToAirport.code,
        departureDate: formatDate(departureDate),
      });

      for (let i = 0; i < fromAirports.length - 1; i++) {
        if (fromAirports[i] && toAirports[i]) {
          segmentsList.push({
            departure: fromAirports[i].code,
            arrival: toAirports[i].code,
            departureDate: formatDate(departureDates[i] || ""),
          });
        }
      }
      if (segmentCount === 1) {
        segmentsList = segmentsList.slice(0, 2); // Show only index 0 and 1
      } else if (segmentCount === 2) {
        segmentsList = segmentsList.slice(0, 3); // Show index 0, 1, and 2
      } else if (segmentCount === 3) {
        segmentsList = segmentsList.slice(0, 4); // Show index 0, 1, 2, and 3
      } else if (segmentCount === 4) {
        segmentsList = segmentsList.slice(0, 5); // Show index 0, 1, 2, and 3
      }
    } else if (flightType === "Return") {
      segmentsList.push({
        departure: normalFromAirport.code,
        arrival: normalToAirport.code,
        departureDate: formatDate(departureDate),
      });
      segmentsList.push({
        departure: normalToAirport.code,
        arrival: normalFromAirport.code,
        departureDate: formatDate(returnDate),
      });
    } else {
      segmentsList.push({
        departure: normalFromAirport.code,
        arrival: normalToAirport.code,
        departureDate: formatDate(departureDate),
      });
    }

    return segmentsList;
  };

  const formatDate = (date) => {
    if (!date) return "";
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
    const day = String(formattedDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const segmentsList = generateSegmentsList(
    flightType,
    fromAirports,
    toAirports,
    normalFromAirport,
    normalToAirport,
    departureDates,
    returnDate
  );

  const handleDepartureDate = (date, index = null) => {
    if (index === null) {
      dispatch(setDepartureDate(date));
      dispatch(toggleDepartureCalendar());
    } else {
      dispatch(setDepartureDates({ date, index }));
      dispatch(toggleDepartureCalendars(index));
    }
  };

  // console.log("segmentsList", segmentsList);

  const searchdata = {
    segmentsList,
    cabin,
    tripType: flightType,
    studentFare,
    regularSearch,
    advanceSearch,
    umrahFare,
    seamanFare,
    passengers,
    classes: [],
    paxDetails: [],
    vendorPref: [],
  };
  console.log("searchdata", searchdata);
  return (
    <Box>
      <Grid id="gridBoxOne" container columnSpacing={0.8}>
        <Grid item xs={12} lg={flightType === "Multi City" ? 5.9 : 4.2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              height: "100%",
            }}
          >
            <Box
              sx={{ ...airFlexStyle, position: "relative" }}
              onClick={() => toggleInput("normalFrom")}
            >
              {isMobile ? <MobileDeparurePlane /> : <AirplanIconOne />}
              <Box sx={{ display: "flex" }}>
                <Typography sx={airtextStyle}>
                  {normalFromAirport.code}
                </Typography>{" "}
                <Typography sx={airtextStyle}>
                  {" "}
                  , {normalFromAirport.name || normalFromAirport.airportName}
                </Typography>
              </Box>
              <SearchInput showInput={showInputs.normalFrom} type="departure" />
            </Box>
            <Box
              sx={{ ...airFlexStyle, position: "relative" }}
              onClick={() => toggleInput("normalTo")}
            >
              {isMobile ? <MobileArrivalPlane /> : <AirplanIconTwo />}
              <Box sx={{ display: "flex" }}>
                <Typography sx={airtextStyle}>
                  {normalToAirport.code}
                </Typography>

                <Typography sx={airtextStyle}>
                  {" "}
                  , {normalToAirport.name || normalToAirport.airportName}
                </Typography>
              </Box>
              <SearchInput showInput={showInputs.normalTo} type="arrival" />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={flightType === "Multi City" ? 12 : 6} lg={1.8}>
          <Box
            sx={{
              mt: { xs: 0.74, lg: 0 },
              position: "relative",
              bgcolor: "white",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "5px",
            }}
            onClick={() => dispatch(toggleDepartureCalendar())}
          >
            <Box
              sx={{
                display: "flex",
                px: flightType === "Multi City" ? 2.5 : 0,
                borderRadius: "5px",
                gap: 1.5,
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  mt: { lg: 1.5, xs: 0.8 },
                  ml: -2.5,
                }}
              >
                <CalenderIcon />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  py: { xs: 1.4, lg: 0 },
                }}
              >
                {(() => {
                  const { month, day, weekday } =
                    getFormattedDateParts(departureDate);
                  return (
                    <>
                      <Typography
                        sx={{
                          fontSize: { lg: "14px", xs: "10.82px" },
                          fontWeight: "500",
                        }}
                      >
                        {month}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { lg: "45px", xs: "34.78px" },
                          fontWeight: "500",
                        }}
                      >
                        {day}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { lg: "14px", xs: "10.82px" },
                          fontWeight: "500",
                        }}
                      >
                        {weekday}
                      </Typography>
                    </>
                  );
                })()}
              </Box>
              <Box></Box>
            </Box>
            {openDeparture && (
              <Box
                sx={{ position: "absolute", top: 125, zIndex: 10, right: 0 }}
              >
                <CustomCalendar
                  date={departureDate}
                  title="Departure Date"
                  minDate={new Date()}
                  handleChange={(date) => handleDepartureDate(date)}
                />
              </Box>
            )}
          </Box>
        </Grid>

        {/* Hide this grid item when "Multi City" is selected */}
        <Grid
          item
          xs={6}
          lg={1.8}
          sx={{ display: flightType === "Multi City" ? "none" : "block" }}
        >
          {flightType !== "Return" ? (
            <Box
              sx={{
                mt: { xs: 0.8, lg: 0 },
                display: "flex",
                bgcolor: "white",
                px: 2.6,
                borderRadius: "5px",
                gap: 1,
                flexDirection: "column",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={() => {
                handleReturnFlightSelection();
                dispatch(toggleArrivalCalendar());
              }}
            >
              <Box sx={{ mt: { lg: 1.5, xs: 0.8 } }}>
                <CalenderIcon />
              </Box>

              <Typography
                sx={{
                  fontSize: { lg: "14px", xs: "10.82px" },
                  fontWeight: "500",
                }}
              >
                Click to Return Flight
              </Typography>
            </Box>
          ) : (
            <Box
              onClick={() => dispatch(toggleArrivalCalendar())}
              sx={{
                mt: { xs: 0.74, lg: 0 },
                position: "relative",
                bgcolor: "white",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  px: flightType === "Multi City" ? 2.5 : 0,

                  gap: 1.5,
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    mt: { lg: 1.5, xs: 0.8 },
                    ml: -2.5,
                  }}
                >
                  <CalenderIcon />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: { xs: 1.4, lg: 0 },
                  }}
                >
                  {(() => {
                    const { month, day, weekday } =
                      getFormattedDateParts(returnDate);
                    return (
                      <>
                        <Typography
                          sx={{
                            fontSize: { lg: "14px", xs: "10.82px" },
                            fontWeight: "500",
                            lineHeight: "0px",
                          }}
                        >
                          {month}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { lg: "45px", xs: "34.78px" },
                            fontWeight: "500",
                          }}
                        >
                          {day}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { lg: "14px", xs: "10.82px" },
                            fontWeight: "500",
                            lineHeight: "0px",
                          }}
                        >
                          {weekday}
                        </Typography>
                      </>
                    );
                  })()}
                </Box>
                <Box></Box>
              </Box>
              {openArrival && (
                <Box
                  sx={{ position: "absolute", top: 125, zIndex: 10, right: 0 }}
                >
                  <CustomCalendar
                    date={returnDate}
                    title="Return Date"
                    minDate={departureDate}
                    handleChange={(date) => dispatch(setReturnDate(date))}
                  />
                </Box>
              )}
            </Box>
          )}
        </Grid>

        <Grid item xs={12} lg={flightType === "Multi City" ? 2.7 : 2.6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              mt: { xs: 1.5, lg: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                height: "100%",
                px: 2.6,
                py: { xs: 1, lg: 0 },
                bgcolor: "white",
                borderRadius: "5px",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { lg: "16px", xs: "12.36px" },
                }}
              >
                {cabin}
              </Typography>

              <Box
                sx={{
                  position: "absolute",
                  top: "60px",
                  px: 2.5,
                  width: flightType === "Multi City" ? "204px" : "193px",
                  right: "0",
                  bgcolor: "white",
                  zIndex: 10,
                }}
              >
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <RadioGroup
                    sx={{ py: 1.5 }}
                    value={cabin}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="Economy"
                      control={<Radio />}
                      label="Economy"
                    />
                    <FormControlLabel
                      value="Business"
                      control={<Radio />}
                      label="Business"
                    />
                    <FormControlLabel
                      value="Premium First"
                      control={<Radio />}
                      label="Premium First"
                    />
                    <FormControlLabel
                      value="Premium Economy"
                      control={<Radio />}
                      label="Premium Economy"
                    />
                    <FormControlLabel
                      value="Premium Business"
                      control={<Radio />}
                      label="Premium Business"
                    />
                  </RadioGroup>
                </Collapse>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                height: "100%",
                px: 2.6,
                py: { xs: 0.8, lg: 0 },
                bgcolor: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => dispatch(togglePassenger())}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { lg: "16px", xs: "12.36px" },
                }}
              >
                {totalPassengerCount} Passenger
              </Typography>

              <Box sx={{ position: "absolute", top: 60, right: 0 }}>
                <Collapse in={isPassengerOpen} timeout="auto" unmountOnExit>
                  <Passenger />
                </Collapse>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={1.6} sx={{ mt: { xs: 2, lg: 0 } }}>
          <Box
            sx={{
              bgcolor: "#2A2E2D",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: 4,
              py: { xs: 0.4, lg: 0 },
              borderRadius: "5px",
              gap: 1,
              mt: { xs: 0.3, lg: 0 },
              display: flightType === "Multi City" && isMobile && "none",
              cursor: "pointer",
            }}
          >
            <Typography sx={{ textAlign: "center", pt: { lg: 3.4, xs: 1 } }}>
              <SearchIcon />
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontSynthesisWeight: "500",
                color: "white",
                textAlign: "center",
              }}
            >
              Search
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Conditionally render layout sections for "Multi City" */}
      {flightType === "Multi City" && (
        <>
          {[...new Array(segmentCount)].map((_, index) => (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: isMobile && "space-between",
                  // my: {lg:2.5,xs:3},
                  mt: { xs: 2, lg: 3 },
                  mb: { xs: 2, lg: 3 },
                }}
              >
                <Box sx={{ transform: "rotate(-60deg)", ml: 1.3 }}>
                  <PlaneIcon />
                </Box>
                <Typography sx={{ fontSize: { lg: "16px", xs: "11px" } }}>
                  Flight {index + 1}
                </Typography>
                <Divider
                  sx={{
                    width: { lg: "54.5%", xs: "60%", md: "89%", sm: "84.5%" },
                    bgcolor: "var(--primary-color)",
                    height: "0.8px",
                  }}
                />
                {isMobile && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { lg: "64%" },
                      gap: 1,
                      cursor: "pointer",
                      ml: { xs: "0%", lg: 0, sm: "10%" },
                      cursor: segmentCount >= 4 ? "not-allowed" : "pointer",
                    }}
                  >
                    {/* <Typography
                    sx={{
                      fontSize: { xs: "11px", lg: "17px" },
                      fontWeight: 500,
                    }}
                  >
                    Remove Flight
                  </Typography> */}
                    <CancelIcon
                      onClick={() => dispatch(removeButton())}
                      sx={{
                        color:
                          segmentCount === 1 ? "gray" : "var(--primary-color)",
                        fontSize: { lg: "40px", xs: "20px" },
                        cursor: segmentCount === 1 ? "not-allowed" : "pointer",
                      }}
                    />
                  </Box>
                )}
              </Box>

              <Grid id="gridBoxOne" container columnSpacing={0.8}>
                <Grid item xs={12} lg={flightType === "Multi City" ? 5.9 : 4.2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                      height: "100%",
                    }}
                  >
                    {/* Departure Box */}
                    <Box
                      sx={{ ...airFlexStyle, position: "relative" }}
                      onClick={() => toggleInput("from", index)}
                    >
                      {isMobile ? <MobileDeparurePlane /> : <AirplanIconOne />}
                      <Box sx={airtextStyle}>
                        <Typography sx={airtextStyle}>
                          {fromAirports[index]?.code}
                        </Typography>

                        <Typography sx={airtextStyle}>
                          ,{" "}
                          {fromAirports[index]?.name ||
                            fromAirports[index]?.airportName}
                        </Typography>
                      </Box>
                      <SearchInput
                        showInput={showInputs.from[index]}
                        type="departure"
                        index={index}
                      />
                    </Box>

                    {/* Arrival Box */}
                    <Box
                      sx={{ ...airFlexStyle, position: "relative" }}
                      onClick={() => toggleInput("to", index)}
                    >
                      {isMobile ? <MobileArrivalPlane /> : <AirplanIconTwo />}

                      <Box sx={airtextStyle}>
                        <Typography sx={airtextStyle}>
                          {toAirports[index]?.code}
                        </Typography>
                        ,{" "}
                        <Typography sx={airtextStyle}>
                          {toAirports[index]?.name ||
                            toAirports[index]?.airportName}
                        </Typography>
                      </Box>
                      <SearchInput
                        showInput={showInputs.to[index]}
                        type="arrival"
                        index={index}
                      />
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={flightType === "Multi City" ? 12 : 6} lg={1.8}>
                  <Box
                    sx={{
                      mt: { xs: 0.8, lg: 0 },
                      bgcolor: "white",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                    onClick={() => dispatch(toggleDepartureCalendars(index))}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        px: 2.5,
                        borderRadius: "5px",
                        gap: 1.5,
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          mt: { lg: 1.5, xs: 0.8 },
                          ml: flightType === "Multi City" && -2.5,
                        }}
                      >
                        <CalenderIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          py: { xs: 1.4, lg: 0 },
                        }}
                      >
                        {(() => {
                          const { month, day, weekday } = getFormattedDateParts(
                            defaultDepartureDates[index]
                          );
                          return (
                            <>
                              <Typography
                                sx={{
                                  fontSize: { lg: "14px", xs: "10.82px" },
                                  fontWeight: "500",
                                }}
                              >
                                {month}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: { lg: "45px", xs: "34.78px" },
                                  fontWeight: "500",
                                }}
                              >
                                {day}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: { lg: "14px", xs: "10.82px" },
                                  fontWeight: "500",
                                }}
                              >
                                {weekday}
                              </Typography>
                            </>
                          );
                        })()}
                      </Box>
                      <Box></Box>
                    </Box>
                    {openDepartures[index] && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 125,
                          zIndex: 10,
                          right: 0,
                        }}
                      >
                        <CustomCalendar
                          date={departureDates[index] || new Date()}
                          title={`Segment ${index + 1} Departure Date`}
                          minDate={new Date()}
                          handleChange={(date) =>
                            handleDepartureDate(date, index)
                          }
                        />
                      </Box>
                    )}
                  </Box>
                </Grid>

                {/* Hide this grid item when "Multi City" is selected */}
                <Grid
                  item
                  xs={6}
                  lg={1.8}
                  sx={{
                    display: flightType === "Multi City" ? "none" : "block",
                  }}
                >
                  <Box
                    sx={{
                      mt: { xs: 1, lg: 0 },
                      display: "flex",
                      bgcolor: "white",
                      px: 2.6,
                      borderRadius: "5px",
                      gap: 1,
                      flexDirection: "column",
                      height: "100%",
                      py: { xs: 1.5, lg: 0 },
                    }}
                  >
                    <Box sx={{ mt: 1.5 }}>
                      <CalenderIcon />
                    </Box>

                    <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                      Click to Return Flight{" "}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} lg={2.6}>
                  {!isMobile && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <CancelIcon
                        onClick={() => dispatch(removeButton())}
                        sx={{
                          color:
                            segmentCount === 1
                              ? "gray"
                              : "var(--primary-color)",
                          fontSize: "40px",
                          cursor:
                            segmentCount === 1 ? "not-allowed" : "pointer",
                        }}
                      />
                    </Box>
                  )}
                </Grid>

                <Grid item xs={1.6}></Grid>
              </Grid>
            </Box>
          ))}

          {/* Add and Remove buttons */}
          <Box sx={{ mt: 2 }}>
            <Divider
              sx={{
                width: { lg: "64%", md: "100%", sm: "100%", xs: "100%" },
                bgcolor: "var(--primary-color)",
                height: "0.7px",
                my: 3,
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile && "center",
                gap: 5,
              }}
            >
              <Box
                onClick={() => dispatch(addButton())}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { lg: "64%" },
                  gap: 1,
                  cursor: "pointer",
                  ml: { xs: "0%", lg: 0, sm: "10%" },
                  cursor: segmentCount >= 4 ? "not-allowed" : "pointer",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: "11px", lg: "17px" }, fontWeight: 500 }}
                >
                  Add More Flights
                </Typography>
                <AddCircleIcon
                  sx={{
                    color: segmentCount >= 4 ? "gray" : "var(--primary-color)",
                    fontSize: { xs: "20px", lg: "30px" },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </>
      )}
      {flightType === "Multi City" && isMobile && (
        <Grid item xs={12} lg={1.6} sx={{ mt: { xs: 2, lg: 0 } }}>
          <Box
            sx={{
              bgcolor: "#2A2E2D",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: 4,
              py: { xs: 0.4, lg: 0 },
              borderRadius: "5px",
              gap: 1,
              mt: { xs: 0.3, lg: 0 },
              cursor: "pointer",
            }}
          >
            <Typography sx={{ textAlign: "center", pt: { lg: 3.4, xs: 1 } }}>
              <SearchIcon />
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontSynthesisWeight: "500",
                color: "white",
                textAlign: "center",
              }}
            >
              Search
            </Typography>
          </Box>
        </Grid>
      )}
    </Box>
  );
};

export default FlightSearch;

const airtextStyle = {
  color: "#2A2E2D",
  fontWeight: 500,
  display: "flex",
  fontSize: { lg: "16px", xs: "12.36px" },
};

const airFlexStyle = {
  bgcolor: "white",
  display: "flex",
  gap: 2.5,
  height: "100%",
  px: 2,
  borderRadius: "5px",
  py: { lg: 2, xs: 1 },
};
