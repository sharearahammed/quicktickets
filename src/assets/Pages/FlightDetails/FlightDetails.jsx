import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Radio,
  Typography,
} from "@mui/material";
import image from "../../svg/asl.svg";
import Plane from "../../svg/plane.svg?react";
import Chair from "../../svg/chair.svg?react";
import Baggage from "../../svg/Baggage.svg?react";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useWindowSize from "../../Common/useWindowSize";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./style.css";
import { useState } from "react";

const FlightDetails = () => {
  const [selectedBox, setSelectedBox] = useState(0);
  const { isMobile } = useWindowSize();

  const handleSelect = (boxIndex) => {
    setSelectedBox(boxIndex);
  };
  return (
    <Container>
      <Box
        sx={{
            mt:10,
          bgcolor: "white",
          py: 1.5,
          borderRadius: "8px",
          mb: 1.6,
          pb: 10,
        }}
      >
        <Box sx={{ px: 2.5,mt:1.5 }}>
          <Grid container sx={{ display: "flex" }}>
            <Grid item xs={12} lg={2.5}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.4,
                    mb: isMobile && 1.5,
                  }}
                >
                  <img className="responsive-img" src={image} alt="" />
                  <Box>
                    <Typography
                      sx={{
                        color: "#333333",
                        fontSize: { xs: "14px", lg: "17px" },
                        fontWeight: 500,
                      }}
                    >
                      Airlines Belgium
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--primary-color)",
                        fontSize: { xs: "11px", lg: "12.75px" },
                        fontWeight: 500,
                      }}
                    >
                      AS 458
                    </Typography>
                  </Box>
                </Box>
                {isMobile && (
                  <Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.6 }}
                    >
                      <ErrorIcon
                        sx={{ fontSize: "18px", color: "var(--primary-color)" }}
                      />
                      <Typography
                        sx={{
                          color: "var(--primary-color)",
                          fontSize: { lg: "12.64px", xs: "11px" },
                          fontWeight: 400,
                        }}
                      >
                        Non Refundable
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                    >
                      <ShoppingBagIcon
                        sx={{ fontSize: "15.34px", color: "#5F6368" }}
                      />
                      <Typography
                        sx={{
                          color: "#5F6368",
                          fontSize: { lg: "12.64px", xs: "11px" },
                          fontWeight: 400,
                        }}
                      >
                        Meal Service
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} lg={4.5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: !isMobile && 3,
                  justifyContent: isMobile && "space-between",
                  mb: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#333333",
                      fontSize: { lg: "24.72px", xs: "19.77px" },
                      fontWeight: 500,
                    }}
                  >
                    DAC
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10.17px", lg: "12.71px" },
                      color: "var(--primary-color)",
                      fontWeight: 500,
                    }}
                  >
                    19:45, <span style={{ color: "#A3A1A1" }}>Dhaka</span>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      bgcolor: "var(--primary-color)",
                      width: "11.3px",
                      height: "11.3px",
                      borderRadius: "50px",
                      mr: -0.5,
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      bgcolor: "var(--primary-color)",
                      width: {
                        xs: "130px",
                        lg: "163.13px",
                        sm: "200px",
                        md: "340px",
                      },
                      height: "2.82px",
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      bgcolor: "var(--primary-color)",
                      width: "11.3px",
                      height: "11.3px",
                      borderRadius: "50px",
                      ml: -0.5,
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      position: "absolute",
                      fontSize: { lg: "11.3px", xs: "9.04px" },
                      color: "#A3A1A1",
                      fontWeight: 500,
                      bottom: 9,
                    }}
                  >
                    18h : 35min
                  </Typography>
                  <Typography
                    sx={{
                      position: "absolute",
                      fontSize: { lg: "11.3px", xs: "9.04px" },
                      color: "#A3A1A1",
                      fontWeight: 500,
                      top: 9,
                    }}
                  >
                    1 stops via BOM{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#333333",
                      fontSize: { xs: "19.77px", lg: "24.72px" },
                      fontWeight: 500,
                    }}
                  >
                    DXB
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10.17px", lg: "12.71px" },
                      color: "var(--primary-color)",
                      fontWeight: 500,
                    }}
                  >
                    19:45, <span style={{ color: "#A3A1A1" }}>Dubai</span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {!isMobile && (
              <Grid item lg={2} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                    <ErrorIcon
                      sx={{ fontSize: "18px", color: "var(--primary-color)" }}
                    />
                    <Typography
                      sx={{
                        color: "var(--primary-color)",
                        fontSize: "12.64px",
                        fontWeight: 400,
                        mb: -0.5,
                      }}
                    >
                      Non Refundable
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                    <ShoppingBagIcon
                      sx={{ fontSize: "15.34px", color: "#5F6368" }}
                    />
                    <Typography
                      sx={{
                        color: "#5F6368",
                        fontSize: "12.64px",
                        fontWeight: 400,
                        ml: 0.4,
                      }}
                    >
                      Baggage 25 KG
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            )}
            {isMobile && (
              <Grid item xs={12}>
                <Box sx={{ my: 1 }}>
                  <Divider
                    sx={{
                      borderColor: "#E1E1E1",
                      borderStyle: "solid",
                      borderImage:
                        "repeating-linear-gradient(90deg, #E1E1E1 16%, #E1E1E1 19%, transparent 10%, transparent 20%) 1",
                    }}
                  />
                </Box>
              </Grid>
            )}
            <Grid item xs={12} lg={1.5}>
              <Box>
                <Typography
                  sx={{
                    color: isMobile ? "#282E2C" : "var(--primary-color)",
                    fontWeight: "500",
                    fontSize: { lg: "24.72px", xs: "18.72px" },
                    textAlign: isMobile && "center",
                  }}
                >
                  ৳ 45,500
                </Typography>
                {!isMobile && (
                  <Box
                    sx={{
                      //   display: "flex",
                      alignItems: "center",
                      gap: 0.6,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#5F6368",
                        ml: 4.5,
                        textDecoration: "line-through",
                      }}
                    >
                      ৳ 55,500
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>

            {!isMobile && (
              <Grid
                item
                lg={1.5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      bgcolor: "#333333",
                      px: 2.8,
                      py: 0.6,
                      borderRadius: "5px 0 0 5px",
                      position: "absolute",
                      top: 0,
                      right: -20.5,
                    }}
                  >
                    BOOK NOW
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      position: "absolute",
                      width: "100%",
                      right: -58,
                      bottom: 6,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#5F6368",
                        fontSize: "13px",
                        msFlowFrom: 500,
                      }}
                    >
                      Flight Details
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid container sx={{ display: "flex" }}>
            <Grid item xs={12} lg={2.5}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.4,
                    mb: isMobile && 1.5,
                  }}
                >
                  <img className="responsive-img" src={image} alt="" />
                  <Box>
                    <Typography
                      sx={{
                        color: "#333333",
                        fontSize: { xs: "14px", lg: "17px" },
                        fontWeight: 500,
                      }}
                    >
                      Airlines Belgium
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--primary-color)",
                        fontSize: { xs: "11px", lg: "12.75px" },
                        fontWeight: 500,
                      }}
                    >
                      AS 458
                    </Typography>
                  </Box>
                </Box>
                {isMobile && (
                  <Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.6 }}
                    >
                      <ErrorIcon
                        sx={{ fontSize: "18px", color: "var(--primary-color)" }}
                      />
                      <Typography
                        sx={{
                          color: "var(--primary-color)",
                          fontSize: { lg: "12.64px", xs: "11px" },
                          fontWeight: 400,
                        }}
                      >
                        Non Refundable
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                    >
                      <ShoppingBagIcon
                        sx={{ fontSize: "15.34px", color: "#5F6368" }}
                      />
                      <Typography
                        sx={{
                          color: "#5F6368",
                          fontSize: { lg: "12.64px", xs: "11px" },
                          fontWeight: 400,
                        }}
                      >
                        Baggage 25 KG
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} lg={4.5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: !isMobile && 3,
                  justifyContent: isMobile && "space-between",
                  mb: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#333333",
                      fontSize: { lg: "24.72px", xs: "19.77px" },
                      fontWeight: 500,
                    }}
                  >
                    DAC
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10.17px", lg: "12.71px" },
                      color: "var(--primary-color)",
                      fontWeight: 500,
                    }}
                  >
                    19:45, <span style={{ color: "#A3A1A1" }}>Dhaka</span>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      bgcolor: "var(--primary-color)",
                      width: "11.3px",
                      height: "11.3px",
                      borderRadius: "50px",
                      mr: -0.5,
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      bgcolor: "var(--primary-color)",
                      width: {
                        xs: "130px",
                        lg: "163.13px",
                        sm: "200px",
                        md: "340px",
                      },
                      height: "2.82px",
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      bgcolor: "var(--primary-color)",
                      width: "11.3px",
                      height: "11.3px",
                      borderRadius: "50px",
                      ml: -0.5,
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      position: "absolute",
                      fontSize: { lg: "11.3px", xs: "9.04px" },
                      color: "#A3A1A1",
                      fontWeight: 500,
                      bottom: 9,
                    }}
                  >
                    18h : 35min
                  </Typography>
                  <Typography
                    sx={{
                      position: "absolute",
                      fontSize: { lg: "11.3px", xs: "9.04px" },
                      color: "#A3A1A1",
                      fontWeight: 500,
                      top: 9,
                    }}
                  >
                    1 stops via BOM{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#333333",
                      fontSize: { xs: "19.77px", lg: "24.72px" },
                      fontWeight: 500,
                    }}
                  >
                    DXB
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10.17px", lg: "12.71px" },
                      color: "var(--primary-color)",
                      fontWeight: 500,
                    }}
                  >
                    19:45, <span style={{ color: "#A3A1A1" }}>Dubai</span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider
          sx={{
            borderColor: "#FFEAF7",
            borderStyle: "solid",
            mb: 2.6,
          }}
        />

        <Box sx={{ display: "flex", gap: 1.5, px: 4.5,mb:2.5 }}>
          <Box
            sx={{
              backgroundColor: "#E14A2D",
              display: "inline-block",
              pl: 1.5,
              pr: 8.5,
              py: 0.5,
              color: "white",
              fontWeight: 500,
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              Select Fare
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              backgroundColor: "#FFEDE9",
              // display: "inline-block",
              pl: 1.5,
              pr: 5,
              py: 0.5,
              color: "white",
              fontWeight: 500,
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
            }}
          >
            <Typography
              sx={{
                color: "var(--primary-color)",
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              Dhaka
            </Typography>
            <Plane />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
                color: "var(--primary-color)",
              }}
            >
              Dubai
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              backgroundColor: "#FFEDE9",
              // display: "inline-block",
              pl: 1.5,
              pr: 5,
              py: 0.5,
              color: "white",
              fontWeight: 500,
              clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
            }}
          >
            <Typography
              sx={{
                color: "var(--primary-color)",
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              Dubai
            </Typography>
            <Plane />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
                color: "var(--primary-color)",
              }}
            >
              Dhaka
            </Typography>
          </Box>
        </Box>
        
        <>
          {[0, 1].map((index) => (
            <Box
              key={index}
              sx={{
                border:
                  selectedBox === index
                    ? "1px solid var(--primary-color)"
                    : "1px solid #5F6368",
                borderRadius: "5px",
                mx: 5,
                py: 3,
                cursor: "pointer",
                mb: 2.5,
              }}
              onClick={() => handleSelect(index)}
            >
              <Grid container>
                <Grid item xs={2}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
                  <Radio
                  checked={selectedBox === index}
                  onChange={() => handleSelect(index)}
                  sx={{
                    color: selectedBox === index && "var(--primary-color)",
                    "&.Mui-checked": {
                      color: "var(--primary-color)", // Checked color
                    },
                  }}
                />
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Typography
                        sx={{
                          color: "#333333",
                          fontWeight: 500,
                          fontSize: "17px",
                        }}
                      >
                        Regular Fare
                      </Typography>
                      <Typography sx={{ color: "var(--primary-color)" }}>
                        + BDT 132
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={3.5}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                    >
                      <Chair />
                      <Typography
                        sx={{
                          ...cardTypography,
                          color: "var(--primary-color)",
                        }}
                      >
                        Cancellation Fee Starting BDT 7954.0
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                    >
                      <Baggage />
                      <Typography sx={cardTypography}>
                        Baggage 25 KG{" "}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                    >
                      <Chair />
                      <Typography sx={cardTypography}>Economy | W</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2.5}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                    >
                      <Baggage />
                      <Typography sx={cardTypography}>
                        Priority Check In
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                    >
                      <Baggage />
                      <Typography sx={cardTypography}>
                        Priority Baggage Handling
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                    >
                      <Baggage />
                      <Typography sx={cardTypography}>Meal Service</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                    >
                      <Baggage />
                      <Typography sx={cardTypography}>
                        Change Any Time
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                    >
                      <Baggage />
                      <Typography sx={cardTypography}>Baggage 25 KG</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "var(--primary-color)",
                        fontWeight: "500",
                        fontSize: { lg: "24.72px", xs: "18.72px" },
                      }}
                    >
                      ৳ 45,500
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        bgcolor: "#333333",
                        px: 2,
                        py: 0.7,
                        borderRadius: "5px",
                      }}
                    >
                      BOOK NOW
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </>
      </Box>
    </Container>
  );
};

export default FlightDetails;

const cardTypography = {
  color: "#5F6368",
  fontSize: "14px",
  fontWeight: 400,
};
