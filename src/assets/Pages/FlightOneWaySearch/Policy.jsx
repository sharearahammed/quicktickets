import { Box, Grid, Typography } from "@mui/material";
import Exclo from "../../svg/exclo.svg?react";
import useWindowSize from "../../Common/useWindowSize";

const Policy = () => {
  const { isMobile } = useWindowSize();
  return (
    <Box>
      <Box
        sx={{
          px: { lg: 4.5, xs: 2 },
          mt: {xs:0.5,lg:3},
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile && "column",
          gap: isMobile && 2,
        }}
      >
        <Box>
          {!isMobile && (
            <Typography
              sx={{
                color: "#202124",
                fontWeight: 500,
                fontSize: { lg: "16px" },
              }}
            >
              Cancellation, Refunds, Date Changes and void are done as per the
              following policies.
            </Typography>
          )}

          <Box
            sx={{
              mt: {
                lg: 1.5,
                xs: 2,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              },
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Exclo />
              <Typography
                sx={{
                  color: "#5F6368",
                  fontSize: { lg: "13px", xs: "10.01px" },
                }}
              >
                Cancellation charge will be: Refund Amount = Paid Amount -
                Airline Cancellation Fee
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Exclo />
              <Typography
                sx={{
                  color: "#5F6368",
                  fontSize: { lg: "13px", xs: "10.01px" },
                }}
              >
                Refund charge will be: Refund Fee = Airline’s Fee + Fare
                Difference
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Exclo />
              <Typography
                sx={{
                  color: "#5F6368",
                  fontSize: { lg: "13px", xs: "10.01px" },
                }}
              >
                Re-Issue charge will be: Re-issue Fee = Airline’s Fee + Fare
                Difference
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Exclo />
              <Typography
                sx={{
                  color: "#5F6368",
                  fontSize: { lg: "13px", xs: "10.01px" },
                }}
              >
                Void charge will be: Void Fee = Airline’s Fee + Fare Difference
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              bgcolor: "var(--primary-color)",
              color: "white",
              fontSize: "12px",
              fontWeight: 400,
              textDecoration: "underline",
              // px: 1.8,
              py: 0.6,
              borderRadius: "3px",
              width: "138px",
              textAlign: "center",
            }}
          >
            Click to See Fare Rules
          </Typography>
        </Box>
      </Box>
      {!isMobile && (
        <Box sx={{ px: 4, pt: 3 }}>
          <Typography sx={footSyle}>
            *Fees are shown for all traveler
          </Typography>
          <Typography sx={footSyle}>
            *ST Convenience fee is non-refundable. We can not guarantee the
            accuracy of airline refund/date change fees as they are subject to
            change without prior notice.
          </Typography>
        </Box>
      )}

      {isMobile && (
        <Box sx={{ mt: 2, px: 2 }}>
          <Grid container>
            <Grid item xs={4}>
              <Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Service Fee Name</Typography>
                </Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Before Dept Fee</Typography>
                </Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>After Dept Fee</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Box sx={fareBoxStyle}>
                  <Typography
                    sx={{ ...fareTypoStype, bgcolor: "var(--primary-color)" }}
                  >
                    Adult
                  </Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>BDT 25,446</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>BDT 25,446</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Box sx={fareBoxStyle}>
                  <Typography
                    sx={{ ...fareTypoStype, bgcolor: "var(--primary-color)" }}
                  >
                    Child
                  </Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>BDT 25,446</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>BDT 25,446</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Policy;

const footSyle = { fontSize: "14px", fontWeight: 400, color: "#5F6368" };

const tableCellStyle = { color: "#5F6368", fontSize: "12px" };
const tableHeadStyle = {
  fontSize: "12px",
  fontWeight: "400",
  color: "#000000",
};

const faresumTypoStyle = {
  color: "#202124",
  fontSize: "12px",
  fontWeight: 400,
};

const fareBoxStyle = {
  bgcolor: "#5F6368",
  color: "white",
  textAlign: "center",
};
const fareTypoStype = { fontSize: "11px", color: "white", mb: 0.15, py: 0.4 };

const faretypoStyle = {
  color: "#5F6368",
  textAlign: "center",
  fontSize: "11px",
  fontWeight: 400,
  fontStyle: "italic",
  py: 0.4,
};
