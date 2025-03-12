import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import * as React from "react";
import useWindowSize from "../../Common/useWindowSize";

// Function to create row data
const createData = (
  paxType,
  paxCount,
  baseFare,
  tax,
  serviceFee,
  markup,
  subTotal
) => {
  return { paxType, paxCount, baseFare, tax, serviceFee, markup, subTotal };
};

const rows = [
  createData(
    "Adult",
    "02",
    "BDT 33,679",
    "BDT 7,800",
    "BDT 0.00",
    "BDT 0.00",
    "BDT 54,000"
  ),
  createData(
    "Child",
    "02",
    "BDT 33,679",
    "BDT 7,800",
    "BDT 0.00",
    "BDT 0.00",
    "BDT 54,000"
  ),
];

const FareDetails = () => {
  const { isMobile } = useWindowSize();
  return (
    <Box sx={{ px: {lg:4.4,xs:2}, mt: 6 }}>
      {isMobile ? (
        <Typography
          sx={{
            fontSize: "14.11px",
            fontWeight: 400,
            color: "var(--primary-color)",
            mb: 1,
          }}
        >
          Fare Details
        </Typography>
      ) : (
        <Box
          sx={{
            backgroundColor: "#FFEDE9",
            display: "inline-block",
            pl: 1.5,
            pr: 15,
            py: 0.4,
            mb: 2.5,
            color: "var(--primary-color)",
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
            Fare Details
          </Typography>
        </Box>
      )}

      {isMobile ? (
        <Box>
          <Grid container>
            <Grid item xs={4}>
              <Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Pax Type</Typography>
                </Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Pax Count</Typography>
                </Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Base Fare</Typography>
                </Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Tax</Typography>
                </Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Service Fee</Typography>
                </Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Markup</Typography>
                </Box>
                <Box sx={fareBoxStyle}>
                  <Typography sx={{ ...fareTypoStype }}>Sub Total</Typography>
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
                  <Typography sx={{ ...faretypoStyle }}>02</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>02</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>02</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>02</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>02</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>02</Typography>
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
                  <Typography sx={{ ...faretypoStyle }}>01</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>01</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>01</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>01</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>01</Typography>
                </Box>
                <Box
                  sx={{
                    ...fareBoxStyle,
                    bgcolor: "transparent",
                    borderBottom: "1px solid #586368",
                  }}
                >
                  <Typography sx={{ ...faretypoStyle }}>01</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table
            sx={{ minWidth: 650, "& td, & th": { padding: "7px" } }}
            aria-label="fare details table"
          >
            <TableHead sx={{ borderTop: "1px solid #DADCE0" }}>
              <TableRow>
                <TableCell sx={tableHeadStyle}>Pax Type</TableCell>
                <TableCell sx={tableHeadStyle}>Pax Count</TableCell>
                <TableCell sx={tableHeadStyle}>Base Fare</TableCell>
                <TableCell sx={tableHeadStyle}>Tax</TableCell>
                <TableCell sx={tableHeadStyle}>Service Fee</TableCell>
                <TableCell sx={tableHeadStyle}>Markup</TableCell>
                <TableCell sx={tableHeadStyle}>Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={tableCellStyle} component="th" scope="row">
                    {row.paxType}
                  </TableCell>
                  <TableCell sx={tableCellStyle}>{row.paxCount}</TableCell>
                  <TableCell sx={tableCellStyle}>{row.baseFare}</TableCell>
                  <TableCell sx={tableCellStyle}>{row.tax}</TableCell>
                  <TableCell sx={tableCellStyle}>{row.serviceFee}</TableCell>
                  <TableCell sx={tableCellStyle}>{row.markup}</TableCell>
                  <TableCell sx={tableCellStyle}>{row.subTotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {isMobile ? (
        <Box sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ color: "#5F6368", fontSize: "12px", fontStyle: "italic" }}
            >
              Grand Total or Customer Total
            </Typography>
            <Typography sx={{ color: "#5F6368", fontSize: "12px" }}>
              BDT 54,000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ color: "#5F6368", fontSize: "12px", fontStyle: "italic" }}
            >
              Discount
            </Typography>
            <Typography sx={{ color: "#5F6368", fontSize: "12px" }}>
              BDT 4,000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ color: "#5F6368", fontSize: "12px", fontStyle: "italic" }}
            >
              Agent Payable
            </Typography>
            <Typography sx={{ color: "#5F6368", fontSize: "12px" }}>
              BDT 50,000
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={{ mt: 1 }}>
          <Divider
            sx={{
              height: "0.2px",
              minHeight: "0.2px",
              backgroundColor: "#DADCE0",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 1,
            }}
          >
            <Typography
              sx={{ color: "#5F6368", fontSize: "15px", fontWeight: 400 }}
            >
              Fare Summery
            </Typography>
            <Box sx={{ display: "flex", mr: 12, gap: 10.6 }}>
              <Box>
                <Typography sx={faresumTypoStyle}>
                  Grand Total or Customer Total
                </Typography>
                <Typography sx={faresumTypoStyle}>Discount</Typography>
                <Typography sx={faresumTypoStyle}>Agent Payable</Typography>
              </Box>
              <Box>
                <Typography sx={faresumTypoStyle}>BDT 54,000</Typography>
                <Typography sx={faresumTypoStyle}>BDT 4,000</Typography>
                <Typography sx={faresumTypoStyle}>BDT 50,000</Typography>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{
              height: "0.2px",
              minHeight: "0.2px",
              backgroundColor: "#DADCE0",
            }}
          />
        </Box>
      )}
      {isMobile && (
        <Divider
          sx={{
            height: "0.2px",
            minHeight: "0.2px",
            backgroundColor: "#5F6368",
            mt:2
          }}
        />
      )}
    </Box>
  );
};

export default FareDetails;

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
const fareTypoStype = { fontSize: "11px", color: "white", mb: 0.15, py: 0.3 };

const faretypoStyle = {
  color: "#5F6368",
  textAlign: "center",
  fontSize: "11px",
  fontWeight: 400,
  fontStyle: "italic",
  py: 0.3,
};
