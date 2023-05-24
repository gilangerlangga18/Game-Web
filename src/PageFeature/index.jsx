import { Box, Typography } from "@mui/material";
import React from "react";
import SlideFuture from "../Slidefuture";
import { futureSx as sx } from "./styles";

function Pagefeature() {
  return (
    <Box sx={sx.bodyFuture}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box sx={sx.boxMain}>
          <Typography sx={sx.textFuture}>Feature</Typography>
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
