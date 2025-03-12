import { Box } from "@mui/material";
import HeaderLogo from "../../svg/HeaderLogo.svg?react";

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2A2E2D",
        mx: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py:1.5,mb:1
      }}
    >
      <HeaderLogo />
    </Box>
  );
};

export default Header;
