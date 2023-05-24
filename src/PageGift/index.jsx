import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import { giftSx as sx } from "./styles";

function PageGift({ openModal }) {
  return (
    <Box
      sx={{
        backgroundImage: 'url("../../../image/Background Section 1.jpg")',
        backgroundSize: "cover",
        overflowX: "hidden",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: { xs: "680px", md: "1080px" },
        }}
      >
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box sx={sx.leftSide}>
            <Box sx={sx.containerLeftSide}>
              <Box
                component="img"
                src="../../../image/Logo.png"
                sx={sx.mainLogo}
              />
              <Typography sx={sx.mainText}>
                Play the most attractive MMORPG in your hands
              </Typography>
              <Box
                sx={{
                  marginTop: { xs: "unse", md: "-40px" },
                }}
              >
                <Button>
                  <Box
                    component="img"
                    src="../../../image/Button Google Play.png"
                    sx={{
                      width: { xs: " 136px", md: "unset" },
                      height: { xs: "40px", md: "unset" },
                    }}
                  />
                </Button>
                <Button>
                  {" "}
                  <Box
                    component="img"
                    src="../../../image/Button Apple Store.png"
                    sx={{
                      width: { xs: " 136px", md: "unset" },
                      height: { xs: "40px", md: "unset" },
                    }}
                  />
                </Button>
              </Box>
              <Box
                onClick={openModal}
                sx={{
                  backgroundImage: 'url("../../../image/Button Gift Code.png")',
                  width: { xs: " 150px", md: "280px" },
                  height: { xs: "47px", md: "90px" },
                  marginTop: { xs: "unset", md: " -30px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundSize: "cover",
                  cursor: "pointer",
                }}
              >
                <Typography sx={sx.giftText}>Free Gift Code!!</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              width: { xs: "400px", md: "1060px" },
              backgroundColor: "red",
            }}
          >
            <Box
              component="img"
              src="../../../image/Image Hero Section 1.png"
              sx={sx.leftImageMain}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageGift;
