import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { footerSx as sx } from "./styles";

function Footer() {
  return (
    <Box sx={sx.containerFooter}>
      <Box sx={sx.bodyFooter}>
        <Box sx={sx.boxMainFooter}>
          <Box sx={sx.textFooter}>
            <Typography>© 2022 GAMES. All RIGHTS RESERVED.</Typography>
            <Typography>Privacy Policy</Typography>
          </Box>
          <Box>
            <Box
              component="img"
              src="../../../image/Character Footer.png"
              sx={sx.mainImageFooter}
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
