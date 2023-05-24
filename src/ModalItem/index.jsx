import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dummy from "../DummyData/DataProject.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 800,
  boxShadow: 24,
  borderRadius: "20px",
  overflow: "auto",

  zIndex: "10",
  backgroundImage: 'url("../../../image/Background Pop Up.jpg")',
};

export default function TransitionsModal({ isOpen, close }) {
  return (
    <Modal
      className="itemModal"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style} className="itemModal">
          <Box
            sx={{
              position: "absolute",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(193, 224, 245, 1)",
              width: "100%",
              borderRadius: "20px 20px 0 0",
              zIndex: "5",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontStyle: "normal",
                fontWeight: " 700",
                fontSize: "24px",
                lineHeight: "30px",
                textAlign: " center",
                letterSpacing: "0.05em",
              }}
            >
              {" "}
              Free Gift Code!!
            </Typography>
            <Box
              component="img"
              src="../../../image/close-circle.png"
              sx={{
                position: "relative",
                left: "270px",
                bottom: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "50px ",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Merriweather",
                fontStyle: "normal",
                fontWeight: " 400",
                fontSize: "24px",
                lineHeight: "150%",

                textAlign: "center",
                letterSpacing: " 0.05em",
                color: "white",
              }}
            >
              {" "}
              Copy these gift code and redeem in your profile
            </Typography>

            {Dummy.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    backgroundImage:
                      'url("../../../image/Button Gift Code.png")',
                    width: "280px",
                    height: "90px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "24px",

                      fontFamily: "Merriweather",
                      fontStyle: "normal",
                    }}
                  >
                    {item.gift}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",

                    gap: "20px",
                    flexDirection: "row",
                  }}
                >
                  {item.preview_item.map((image) => (
                    <Box
                      sx={{
                        width: "120px",
                        height: "180px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Box component="img" src={image} />
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
