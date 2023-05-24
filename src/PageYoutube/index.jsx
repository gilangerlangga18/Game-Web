import { Box, Typography } from "@mui/material";
import React from "react";
import { youtubeSx as sx } from "./styles";

function PageYoutube() {
  return (
    <Box sx={sx.bodyYoutube}>
      <Box
        sx={{
          width: "80%",
        }}
      >
        <Box sx={sx.containerYoutube}>
          <Box sx={sx.youtubeSite}>
            <Box>
              <Typography sx={sx.textMain}>
                Experience the game with the best action, amazing characters and
                unforgettable experiences
              </Typography>
            </Box>
            <Box sx={sx.backgroundImage}>
              {" "}
              <Box
                component="img"
                src="../../../image/image 8.png"
                sx={{
                  width: { xs: "276px", md: "480px" },
                  height: { xs: "151px", md: "270px" },
                }}
              />
            </Box>
          </Box>
          <Box>
            <Box
              component="img"
              src="../../../image/Image Hero Section 2.png"
              sx={sx.imageHero}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageYoutube;
