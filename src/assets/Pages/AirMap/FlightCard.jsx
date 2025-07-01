import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid,
  Divider,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet icon issue
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const getStatusColor = (status) => {
  switch (status) {
    case "ARRIVED":
      return "success";
    case "ON SKY":
      return "info";
    default:
      return "default";
  }
};

const fetchFlightData = async () => {
  const res = await fetch("./flightData.json");
  console.log("res", res);
  if (!res.ok) throw new Error("Failed to load flight data");
  return res.json();
};

const FlightMap = ({ lat, lng }) => (
  <MapContainer
    center={[lat, lng]}
    zoom={6}
    style={{ height: 400, width: "100%" }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat, lng]}>
      <Popup>Live Plane Location</Popup>
    </Marker>
  </MapContainer>
);

const FlightCard = ({ flight }) => {
  const [openMap, setOpenMap] = useState(false);
  console.log("flightttttttttttttttttttt", flight);
  const {
    flight: flightInfo,
    departure,
    arrival,
    status,
    distance,
    tracks = [],
  } = flight;

  // ✅ Get latest track point as live location
  const lastTrack = tracks.length > 0 ? tracks[tracks.length - 1] : null;
  const location = lastTrack
    ? {
        latitude: lastTrack.lat || lastTrack.latitude,
        longitude: lastTrack.lng || lastTrack.longitude,
      }
    : null;

  const getTime = (timestamp) =>
    timestamp
      ? new Date(timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "N/A";
      
  return (
    <Card sx={{ mb: 4, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" display="flex" alignItems="center">
            {departure.airport} <FlightTakeoffIcon sx={{ mx: 1 }} />{" "}
            {arrival.airport}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setOpenMap(true)}
          >
            Live Tracking
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography color="error" fontWeight="bold">
          {flightInfo.marketingAirline}
        </Typography>
        <Typography color="textSecondary">
          {flightInfo.marketingCarrier} {flightInfo.number} |{" "}
          {flightInfo.airCraft}
        </Typography>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Departure
            </Typography>
            <Typography fontWeight="bold">
              {departure.airport} - {departure.city}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {departure.airportName}
            </Typography>
            <Typography variant="body2" color="error">
              Terminal {departure.terminal || "N/A"}
            </Typography>
            <Typography variant="body2" color="success.main" mt={1}>
              {departure.dayStatus}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Arrival
            </Typography>
            <Typography fontWeight="bold">
              {arrival.airport} - {arrival.city}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {arrival.airportName}
            </Typography>
            <Typography variant="body2" color="error">
              Terminal {arrival.terminal || "N/A"}
            </Typography>
            <Typography variant="body2" color="success.main" mt={1}>
              {arrival.dayStatus}
            </Typography>
          </Grid>
        </Grid>

        <Box
          mt={3}
          p={2}
          bgcolor="#f9f9f9"
          borderRadius={2}
          border={1}
          borderColor="#ddd"
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Typography variant="caption" color="textSecondary">
                Scheduled Departure
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                {getTime(departure.scheduledTime)}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" color="textSecondary">
                Actual Departure
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                {getTime(departure.actualTime)}
              </Typography>
            </Grid>
            <Grid item>
              <Chip
                label={status.landingStatus}
                color={getStatusColor(status.landingStatus.toUpperCase())}
                size="small"
              />
            </Grid>
            <Grid item xs>
              <Typography variant="caption" color="textSecondary">
                Scheduled Arrival
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                {getTime(arrival.scheduledTime)}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" color="textSecondary">
                Actual Arrived
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                {getTime(arrival.actualTime || arrival.estimatedTime)}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            align="center"
            variant="caption"
            color="textSecondary"
            mt={1}
          >
            {distance.flightDuration}
          </Typography>
        </Box>

        <Dialog
          open={openMap}
          onClose={() => setOpenMap(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Live Plane Location</DialogTitle>
          <DialogContent>
            {location?.latitude && location?.longitude ? (
              <FlightMap lat={location.latitude} lng={location.longitude} />
            ) : (
              <Typography>No live location available.</Typography>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

const FlightPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["flightData"],
    queryFn: fetchFlightData,
  });
  console.log("data", data);
  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading data.</Typography>;

  const { live = [], arrived = [] } = data.data;

  const enrichWithLiveLocation = (flight) => {
    console.log("flight", flight);
    const lastTrack = flight.tracks?.[flight.tracks.length - 1];
    const location = lastTrack
      ? { latitude: lastTrack.lat, longitude: lastTrack.lng }
      : null;
    console.log("lastTrack ", lastTrack);
    console.log("location ", location);
    return { ...flight, location };
  };

  return (
    <Box p={3} maxWidth={800} mx="auto">
      {live.map((flight, index) => (
        <FlightCard
          key={`live-${index}`}
          flight={enrichWithLiveLocation(flight)}
        />
      ))}
      {arrived.map((flight, index) => (
        <FlightCard
          key={`arrived-${index}`}
          flight={enrichWithLiveLocation(flight)}
        />
      ))}
    </Box>
  );
};

export default FlightPage;
