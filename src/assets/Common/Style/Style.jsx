import { styled } from "@mui/material"

export const BpIcon = styled("span")(
    ({ name, searchOptions, boxShadowColor = "var(--primary-color)" }) => ({
      width: 13,
      height: 13,
      boxShadow: `0 0 0 1px ${
        name === "fareType" && searchOptions.searchType === "advanced"
          ? ""
          : boxShadowColor
      }`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    })
  )
  
  export const BpCheckedIcon = styled(BpIcon)(
    ({ bgColor = "var(--primary-color)" }) => ({
      "&::before": {
        display: "block",
        width: 11,
        height: 11,
        backgroundColor: bgColor,
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "none",
      },
    })
  )