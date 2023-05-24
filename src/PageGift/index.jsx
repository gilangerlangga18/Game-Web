import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

function PageGift({ openModal }) {
  return (
    <Box
      sx={{
        right: "0",
        left: "0",
        Button: "0",
        top: "0",
        backgroundImage: 'url("../../../image/Background Section 1.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "680px", md: "1080px" },
          // backgroundColor: "yellowgreen",
        }}
      >
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "unset", md: "space-around" },
                flexDirection: "column",
                width: { xs: "unset", md: "840px" },
                height: { xs: "400px", md: "690px" },

                marginTop: { xs: "140px", md: "unset" },
                gap: { xs: "20px", md: "unset" },
              }}
            >
              <Box
                component="img"
                src="../../../image/Logo.png"
                sx={{
                  width: { xs: "284px", md: "604px" },
                  height: { xs: "84px", md: "180px" },
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: "18px", md: "40px" },
                  lineHeight: { xs: "23px", md: "45px" },
                  textAlign: "center",
                  width: { xs: "328px", md: "600px" },
                  height: { xs: "46px", md: "90px" },
                  color: "white",
                  fontFamily: "Merriweather",
                  fontStyle: "normal",
                  letterSpacing: { xs: "0.05em", md: "unset" },
                }}
              >
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

                  // backgroundPosition: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "14px", md: "24px" },

                    fontFamily: "Merriweather",
                    fontStyle: "normal",
                  }}
                >
                  Free Gift Code!!
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            // className="movingAngle"
            sx={{
              display: "flex",
              height: "100%",
              // justifyContent: "center",
              alignItems: "center",
              //   backgroundColor: "red",
            }}
          >
            <Box
              component="img"
              src="../../../image/Image Hero Section 1.png"
              sx={{
                animation: { xs: "unset", md: "MoveUpDown 4s ease infinite" },
                width: { xs: "424px", md: "1060px" },
                height: { xs: "268px", md: "669px" },
                // backgroundColor: "blue",
                position: "absolute",
                zIndex: 0,
                right: { xs: "unset", md: 0 },
                marginTop: { xs: "120px", md: "unset" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageGift;
