import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        height: { xs: "286px", md: "140px" },
        backgroundColor: "black",
        position: "relative",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "blue",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-around", md: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            // backgroundColor: "red",
            width: { xs: "100%", md: "100%" },
            height: { xs: "286px", md: "140px" },
          }}
        >
          <Box
            sx={{
              color: "white",
              fontWeight: { xs: "400", md: "400" },
              fontSize: { xs: "10px", md: "18px" },
              lineHeight: { xs: "13px", md: "23px" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography>© 2022 GAMES. All RIGHTS RESERVED.</Typography>
            <Typography>Privacy Policy</Typography>
          </Box>
          <Box>
            <Box
              component="img"
              src="../../../image/Character Footer.png"
              sx={{
                marginTop: { xs: "0", md: "-100px" },
                marginBottom: { xs: "-30px", md: "unset" },
                width: { xs: "180px", md: "unset" },
                height: { xs: "144px", md: "unset" },
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button>
              <Box
                component="img"
                src="../../../image/Button Footer Play Now.png"
              />
            </Button>
            <Button>
              <Box
                component="img"
                src="../../../image/Button Footer Facebook.png"
              />
            </Button>{" "}
            <Button>
              <Box
                component="img"
                src="../../../image/Button Footer Instagram.png"
              />
            </Button>{" "}
            <Button>
              <Box
                component="img"
                src="../../../image/Button Footer Discord.png"
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
