import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import AirAsia from "../../svg/AirAsia.svg";
import Baggage from "../../svg/Baggage.svg?react";
import Chair from "../../svg/GrayChair.svg?react";
import Exclo from "../../svg/exclo.svg?react";
import Cabin from "../../svg/cabin.svg?react";
import GrayPlane from "../../svg/smallGrayPlane.svg?react";
import useWindowSize from "../../Common/useWindowSize";
import PersonIcon from "@mui/icons-material/Person";

const Details = () => {
  const { isMobile } = useWindowSize();
  return (
    <Box sx={{ bgcolor: "white" }}>
      
      {isMobile && (
        <Box sx={{ px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Typography sx={{ fontSize: "23px", fontWeight: 400 }}>
              Dhaka
            </Typography>
            <GrayPlane />
            <Typography sx={{ fontSize: "23px", fontWeight: 400 }}>
              Dubai
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 3.5, mb: 2 }}>
            <Typography sx={{ fontSize: "10.2px", fontWeight: 300 }}>
              Round Trip
            </Typography>
            <Typography sx={{ fontSize: "10.2px", fontWeight: 300 }}>
              Economy
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
              <PersonIcon sx={{ color: "#5F6368", fontSize: "13px" }} />
              <Typography sx={{ fontSize: "10.2px", fontWeight: 300 }}>
                1 Passenger
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {isMobile && (
        <Typography
          sx={{
            px: 2,
            color: "var(--primary-color)",
            fontSize: "14.11px",
            fontWeight: 400,
            mb: 1,
          }}
        >
          Flights Details
        </Typography>
      )}

      <Grid
        container
        sx={{ display: "flex", alignItems: "center", gap: { xs: 2, lg: 0 } }}
      >
        <Grid item xs={12} lg={9}>
          <Box
            sx={{
              px: { lg: 4.5, xs: 2 },
              display: "flex",
              gap: 1.2,
              mb: { lg: 2, xs: 1.4 },
            }}
          >
            <img src={AirAsia} alt="" />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { lg: "16px", xs: "12.42px" },
                }}
              >
                Air Asia
              </Typography>{" "}
              <Typography sx={typoStyle}></Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { lg: "16px", xs: "12.42px" },
                }}
              >
                AA 589
              </Typography>
              <Typography sx={typoStyle}></Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { lg: "16px", xs: "12.42px" },
                }}
              >
                Airbus A380
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1.3,
              alignItems: "center",
              px: { lg: 4.4, xs: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.8,
              }}
            >
              <Typography sx={circleStyleBorder}></Typography>
              <Typography sx={circleStyle}></Typography>
              <Typography sx={circleStyle}></Typography>
              <Typography sx={circleStyle}></Typography>
              <Typography sx={circleStyle}></Typography>
              <Typography sx={circleStyleBorder}></Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { lg: 2.5, md: 2.7, sm: 2.5, xs: 1 },
                // mt:0.7
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "15px", xs: "12px" },
                  fontWeight: 400,
                  // mt: { xs: -0, lg: 0, sm: 1 },
                }}
              >
                <span>00:05</span>
                <span
                  style={{
                    backgroundColor: "black",
                    height: "5px",
                    width: "7px",
                    borderRadius: "50px",
                  }}
                ></span>
                <span>
                  Hazrat Sha Jalal International Airport, Dhaka, Bangladesh (DAC
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#5F6368",
                  fontSize: { lg: "13px", xs: "10.09px" },
                  fontWeight: 400,
                }}
              >
                Travel time: 2 Hrs 45 Min
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "15px", xs: "12px" },
                  fontWeight: 400,
                }}
              >
                <span>00:05</span>
                <span
                  style={{
                    backgroundColor: "black",
                    height: "5px",
                    width: "7px",
                    borderRadius: "50px",
                  }}
                ></span>
                <span>
                  Hazrat Sha Jalal International Airport, Dhaka, Bangladesh (DAC
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              px: { xs: 5.2, lg: 0 },
              mt: { lg: 0, xs: 0.5 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Exclo />
              <Typography sx={typoDetailsStype}>Non Refundable</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Chair />
              <Typography sx={typoDetailsStype}>Economy | W</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Baggage />
              <Typography sx={typoDetailsStype}>Baggage 25 KG</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Cabin />
              <Typography sx={typoDetailsStype}>Cabin 5 KG</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ px: {xs:2,lg:4}, my: 2.5 }}>
        <Divider />
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "9.17px", lg: "16px" },
              color: "#5F6368",
              py: 1.3,
            }}
          >
            Change Plane Mumbai, India (BOM) Connecting time at 5 Hrs 5min
          </Typography>
        </Box>
        <Divider />
      </Box>

      <Grid
        container
        sx={{ display: "flex", alignItems: "center", gap: { xs: 2, lg: 0 } }}
      >
        <Grid item xs={12} lg={9}>
          <Box
            sx={{
              px: { lg: 4.5, xs: 2 },
              display: "flex",
              gap: 1.2,
              mb: { lg: 2, xs: 1.4 },
            }}
          >
            <img src={AirAsia} alt="" />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { lg: "16px", xs: "12.42px" },
                }}
              >
                Air Asia
              </Typography>{" "}
              <Typography sx={typoStyle}></Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { lg: "16px", xs: "12.42px" },
                }}
              >
                AA 589
              </Typography>
              <Typography sx={typoStyle}></Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { lg: "16px", xs: "12.42px" },
                }}
              >
                Airbus A380
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1.3,
              alignItems: "center",
              px: { lg: 4.4, xs: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.8,
              }}
            >
              <Typography sx={circleStyleBorder}></Typography>
              <Typography sx={circleStyle}></Typography>
              <Typography sx={circleStyle}></Typography>
              <Typography sx={circleStyle}></Typography>
              <Typography sx={circleStyle}></Typography>
              <Typography sx={circleStyleBorder}></Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { lg: 2.5, md: 2.7, sm: 2.5, xs: 1 },
                // mt:0.7
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "15px", xs: "12px" },
                  fontWeight: 400,
                  // mt: { xs: -0, lg: 0, sm: 1 },
                }}
              >
                <span>00:05</span>
                <span
                  style={{
                    backgroundColor: "black",
                    height: "5px",
                    width: "7px",
                    borderRadius: "50px",
                  }}
                ></span>
                <span>
                  Hazrat Sha Jalal International Airport, Dhaka, Bangladesh (DAC
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#5F6368",
                  fontSize: { lg: "13px", xs: "10.09px" },
                  fontWeight: 400,
                }}
              >
                Travel time: 2 Hrs 45 Min
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "15px", xs: "12px" },
                  fontWeight: 400,
                }}
              >
                <span>00:05</span>
                <span
                  style={{
                    backgroundColor: "black",
                    height: "5px",
                    width: "7px",
                    borderRadius: "50px",
                  }}
                ></span>
                <span>
                  Hazrat Sha Jalal International Airport, Dhaka, Bangladesh (DAC
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              px: { xs: 5.2, lg: 0 },
              mt: { lg: 0, xs: 0.5 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Exclo />
              <Typography sx={typoDetailsStype}>Non Refundable</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Chair />
              <Typography sx={typoDetailsStype}>Economy | W</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Baggage />
              <Typography sx={typoDetailsStype}>Baggage 25 KG</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Cabin />
              <Typography sx={typoDetailsStype}>Cabin 5 KG</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;

const typoStyle = {
  bgcolor: "black",
  height: "5px",
  width: "5px",
  borderRadius: "50px",
};

const circleStyleBorder = {
  width: "14px",
  height: "14px",
  borderRadius: "50px",
  border: "1px solid #DADCE0",
};

const circleStyle = {
  width: "8px",
  height: "8px",
  borderRadius: "50px",
  bgcolor: "#DADCE0",
};

const typoDetailsStype = {
  fontSize: { lg: "14px", xs: "9.63px" },
  color: "#5F6368",
  fontWeight: 400,
};
