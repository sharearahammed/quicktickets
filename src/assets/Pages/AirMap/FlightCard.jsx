import React, { useEffect, useRef, useState } from "react";
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
  Drawer,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useQuery } from "@tanstack/react-query";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import planeIconImg from "../../png/plane.png";
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
  if (!res.ok) throw new Error("Failed to load flight data");
  return res.json();
};

const planeIcon = new L.Icon({
  iconUrl: planeIconImg,
  iconSize: [32, 32], // Adjust size as needed
  iconAnchor: [16, 16], // Anchor at center for rotation or accurate positioning
  popupAnchor: [0, -10],
});

const AnimatedPlane = ({
  lat,
  lng,
  arrival,
  speedKnots,
  onPositionUpdate,
  onStart,
  onEnd,
}) => {
  const map = useMap();

  useEffect(() => {
    if (!arrival?.latitude || !arrival?.longitude || !map) return;

    const startLat = parseFloat(lat);
    const startLng = parseFloat(lng);
    const endLat = parseFloat(arrival.latitude);
    const endLng = parseFloat(arrival.longitude);

    const startLatLng = L.latLng(startLat, startLng);
    const endLatLng = L.latLng(endLat, endLng);

    const marker = L.marker(startLatLng, { icon: planeIcon }).addTo(map);

    const distance = startLatLng.distanceTo(endLatLng); // meters
    const speedKmh = (speedKnots || 100) * 1.852;
    const speedMs = (speedKmh * 1000) / 3600;
    const duration = distance / speedMs;

    let start = null;
    onStart?.();

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / (duration * 1000);

      if (progress >= 1) {
        marker.setLatLng(endLatLng);
        onPositionUpdate?.([endLat, endLng]);
        onEnd?.();
        return;
      }

      const currentLat = startLat + (endLat - startLat) * progress;
      const currentLng = startLng + (endLng - startLng) * progress;

      marker.setLatLng([currentLat, currentLng]);
      onPositionUpdate?.([currentLat, currentLng]);

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    return () => {
      marker.remove();
    };
  }, [lat, lng, arrival, speedKnots, map]);

  return null;
};

// ✅ Main Map Component
const FlightMap = ({ lat, lng, tracks = [], arrival }) => {
  const [currentPos, setCurrentPos] = useState([lat, lng]);
  const [isMoving, setIsMoving] = useState(false);

  const arrivalLat = parseFloat(arrival?.latitude);
  const arrivalLng = parseFloat(arrival?.longitude);

  const arrivalPosition = [arrivalLat, arrivalLng];
  const lastTrack = tracks?.[tracks.length - 1];
  const speedKnots = lastTrack?.groundSpeed || 0;

  const trackPath = tracks
    .map((t) => [t.lat || t.latitude, t.lng || t.longitude])
    .filter(([lat, lng]) => lat && lng);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={6}
      style={{ height: 400, width: "100%" }}
      whenCreated={(mapInstance) => {
        setTimeout(() => {
          mapInstance.invalidateSize(); // helps inside hidden tabs/drawers
        }, 500);
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {trackPath.length > 1 && (
        <Polyline positions={trackPath} color="blue" weight={3} />
      )}

      {/* Line from start to current */}
      <Polyline
        positions={[[lat, lng], currentPos]}
        pathOptions={{ color: "blue", weight: 3 }}
      />

      {/* Line from current to arrival */}
      <Polyline
        positions={[currentPos, arrivalPosition]}
        pathOptions={{
          color: isMoving ? "yellow" : "red",
          dashArray: "1 10",
          weight: 3,
          height:3
        }}
      />

      <AnimatedPlane
        lat={lat}
        lng={lng}
        arrival={arrival}
        speedKnots={speedKnots}
        onPositionUpdate={setCurrentPos}
        onStart={() => setIsMoving(true)}
        onEnd={() => setIsMoving(false)}
      />
    </MapContainer>
  );
};

const FlightCard = ({ flight }) => {
  const [openMap, setOpenMap] = useState(false);
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

        <Drawer
          anchor="right"
          open={openMap}
          onClose={() => setOpenMap(false)}
          PaperProps={{ sx: { width: { xs: "100%", sm: 600 }, p: 2 } }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Typography variant="h6">Live Plane Location</Typography>
            <IconButton onClick={() => setOpenMap(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {location?.latitude && location?.longitude ? (
            <FlightMap
              lat={location.latitude}
              lng={location.longitude}
              tracks={tracks}
              arrival={arrival}
            />
          ) : (
            <Typography>No live location available.</Typography>
          )}
        </Drawer>
      </CardContent>
    </Card>
  );
};

const FlightPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["flightData"],
    queryFn: fetchFlightData,
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading data.</Typography>;

  const { live = [] } = data.data;

  const enrichWithLiveLocation = (flight) => {
    const lastTrack = flight.tracks?.[flight.tracks.length - 1];
    const location = lastTrack
      ? { latitude: lastTrack.lat, longitude: lastTrack.lng }
      : null;
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
    </Box>
  );
};

export default FlightPage;

// Claude ai
// Grok ***
// cursor.com
