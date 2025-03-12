import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BpCheckedIcon, BpIcon } from "../Common/Style/Style";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSeamanFare,
  selectStudentFare,
  selectUmrahFare,
  toggleAdvanceSearch,
  toggleRegularSearch,
} from "../Slice/Features/flightSlice";

const FlightBoxFooter = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const { regularSearch, advanceSearch,studentFare, umrahFare, seamanFare } = useSelector((state) => state.flight);
  const handleToggle = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <Grid container columnSpacing={2}>
        <Grid item xs={3.4}>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              alignItems: "center",
              mt: 3,
              bgcolor: "white",
            }}
          >
            <FormControlLabel
              sx={{
                mr: "2px",
                ml: 0,
                py: 0.6,
                borderRadius: "2px",
              }}
              control={
                <Checkbox
                  checked={regularSearch}
                  onChange={() => dispatch(toggleRegularSearch())}
                  disableRipple
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--lightblack-color)",
                    cursor: "pointer",
                  }}
                >
                  Regular Search
                </Typography>
              }
            />
            <FormControlLabel
              sx={{ mr: "2px", ml: 0 }}
              control={
                <Checkbox
                  checked={advanceSearch}
                  onChange={() => dispatch(toggleAdvanceSearch())}
                  disableRipple
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--lightblack-color)",
                    cursor: "pointer",
                  }}
                >
                  Advanced Search
                </Typography>
              }
            />
          </Box>
        </Grid>
        <Grid item xs={5.5}>
        <Box
      sx={{
        display: "flex",
        gap: 5,
        alignItems: "center",
        mt: 3,
        bgcolor: "white",
        py: 0.6,
        borderRadius: "2px",
      }}
    >
      <FormControlLabel
        sx={{ mr: "2px", ml: 0 }}
        control={
          <Checkbox
            checked={studentFare}
            onChange={() => dispatch(selectStudentFare())}
            disableRipple
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
          />
        }
        label={
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--lightblack-color)",
              cursor: "pointer",
            }}
          >
            Student Fare
          </Typography>
        }
      />
      <FormControlLabel
        sx={{ mr: "2px", ml: 0 }}
        control={
          <Checkbox
            checked={umrahFare}
            onChange={() => dispatch(selectUmrahFare())}
            disableRipple
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
          />
        }
        label={
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--lightblack-color)",
              cursor: "pointer",
            }}
          >
            Umrah Fare
          </Typography>
        }
      />
      <FormControlLabel
        sx={{ mr: "2px", ml: 0 }}
        control={
          <Checkbox
            checked={seamanFare}
            onChange={() => dispatch(selectSeamanFare())}
            disableRipple
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
          />
        }
        label={
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--lightblack-color)",
              cursor: "pointer",
            }}
          >
            Seaman Fare
          </Typography>
        }
      />
    </Box>
        </Grid>
        <Grid item xs={3.08}>
          <Box
            sx={{
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              mt: 3,
              //   py: 1.05,
              px: 1.5,
              borderRadius: "2px",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "#8C8080" }}>
              Select Preferred Airlines
            </Typography>
            <ArrowDropDownIcon
              sx={{ color: "var(--primary-color)", fontSize: "40px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightBoxFooter;
