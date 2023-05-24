import { Box, Typography } from "@mui/material";
import React from "react";
import SlideFuture from "../Slidefuture";

function Pagefeature() {
  return (
    <Box
      sx={{
        height: { xs: "493PX", md: "1065px" },
        backgroundImage: 'url("../../../image/Background Section 4.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            height: "100%",
            // justifyContent: "space-around",
            paddingTop: "100px",
            // backgroundColor: "red",
          }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: { xs: "48px", md: "64px" },
              lineHeight: { xs: "59px", md: "79px" },
              textAlign: "center",
              fontFamily: "metal mania",
              fontStyle: "normal",
              letterSpacing: "0.15em",
              color: "white",
            }}
          >
            Feature
          </Typography>
          <Box>
            {" "}
            <SlideFuture />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Pagefeature;
