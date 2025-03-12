import { Box, TextField, Typography } from "@mui/material";
import "./inputstyle.css";
import { useState } from "react";
import Exclo from "../../svg/exclo.svg?react"

const PassengerInfo = () => {
  const [selected, setSelected] = useState("Mr");
  const options = ["Mr", "Mrs", "Miss"];
  return (
    <Box>
      <Box sx={{ px: 2, mt: 3, }}>
        <Typography
          sx={{
            fontSize: "14.11px",
            fontWeight: "400",
            color: "var(--primary-color)",
          }}
        >
          Passenger Information
        </Typography>
        <Box
          sx={{
            borderRadius: "10.5px",
            border: "1px solid #DADCE0",
            px: 2,
            py: 1.3,
          }}
        >
          <Typography
            sx={{ color: "#5F6368", fontSize: "12px", fontWeight: 400 }}
          >
            Passenger #1, Adult
          </Typography>

          <Box sx={{ mt: 1.5 }}>
            <TextField
              label="Search By "
              variant="outlined"
              className="custom-textfield"
            />

            <Box sx={{ display: "flex", gap: 1, my: 2 }}>
              {options.map((option) => (
                <Typography
                  key={option}
                  onClick={() => setSelected(option)}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "3.5px",
                    cursor: "pointer",
                    bgcolor:
                      selected === option
                        ? "var(--primary-color)"
                        : "transparent",
                    color: selected === option ? "white" : "#5F6368",
                    border: selected === option ? "none" : "1px solid #DADCE0",
                    transition: "all 0.3s ease",
                    fontSize: "11.9px",
                  }}
                >
                  {option}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1.5 }}
            >
              <TextField
                label="Sharear "
                variant="outlined"
                className="custom-textfield"
              />
              <TextField
                label="Ahammed "
                variant="outlined"
                className="custom-textfield"
              />
              <TextField
                label="Male "
                variant="outlined"
                className="custom-textfield"
              />
              <TextField
                label="21/12/2000 "
                variant="outlined"
                className="custom-textfield"
              />
              <TextField
                label="Bangladeshi "
                variant="outlined"
                className="custom-textfield"
              />
              <TextField
                label="A71B4134756 "
                variant="outlined"
                className="custom-textfield"
              />
              <TextField
                label="21/12/2000 "
                variant="outlined"
                className="custom-textfield"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: 2, mt: 3.5 }}>
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            py: 1,
            bgcolor: "#202124",
            borderRadius: "5px",
          }}
        >
          Book & Hold Ticket
        </Typography>

        <Box sx={{display:"flex",gap:1.2,mt:2}}>
            <Exclo/>
        <Typography sx={{color:"#5F6368",fontSize:"13px"}}>
          Agree quick tickets terms and conditions before Book & Hold Ticket{" "}
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PassengerInfo;
