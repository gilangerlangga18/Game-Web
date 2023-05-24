import { Box, Typography } from "@mui/material";
import React from "react";

function PageYoutube() {
  return (
    <Box
      sx={{
        right: "0",
        left: "0",
        top: "0",
        bottom: "0",
        // backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: { xs: "680px", md: "904px" },
        backgroundImage: 'url("../../../image/Background Section 2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            height: "100%",
            flexDirection: { xs: "column", md: "unset" },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "10px", md: "40px" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  width: { xs: "320px", md: "655px" },
                  //   height: "135px",
                  fontWeight: "400",
                  fontSize: { xs: "18px", md: "36px" },
                  lineHeight: { xs: "23px", md: " 45px" },
                  textAlign: "center",
                  letterSpacing: "0.05em",
                  fontFamily: "Merriweather",
                  fontStyle: "normal",
                  // marginTop: { xs: "10px", md: "unset" },
                  color: "white",
                }}
              >
                Experience the game with the best action, amazing characters and
                unforgettable experiences
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundImage: 'url("../../../image/Video Background.png")',
                width: { xs: "360px", md: "655px" },
                height: { xs: "208px", md: " 378px" },
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
              }}
            >
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
              sx={{
                width: { xs: "320px", md: "unset" },
                height: { xs: "234px", md: "unset" },
                marginBottom: { xs: "60px", md: "unset" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageYoutube;
