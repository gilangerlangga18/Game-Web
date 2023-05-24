import { Box } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <Box
      sx={{
        height: "148px",
        width: "100%",
        display: "flex",
        alignItems: { xs: "unset", md: "center" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          //   backgroundColor: "red",
          width: "100%",
          marginLeft: { xs: "30px", md: "100px" },
        }}
      >
        {" "}
        <Box
          component="img"
          src="../../../image/Logo.png"
          sx={{
            width: { xs: "136", md: "202px" },
            height: { xs: "40px", md: "60px" },
            marginTop: { xs: "20px", md: "unset" },
          }}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
