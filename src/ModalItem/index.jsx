import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Dummy from "../DummyData/DataProject.json";
import { modalSx as sx } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "328px", md: "800px" },
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
          <Box sx={sx.containerModal}>
            {" "}
            <Typography sx={sx.textGift}> Free Gift Code!!</Typography>
          </Box>
          <Box sx={sx.bodyModal}>
            <Typography sx={sx.mainText}>
              {" "}
              Copy these gift code and redeem in your profile
            </Typography>

            {Dummy.map((item) => (
              <Box sx={sx.mainModal}>
                <Box sx={sx.giftCode}>
                  <Typography sx={sx.textCode}>{item.gift}</Typography>
                </Box>

                <Box sx={sx.containerItem}>
                  {item.preview_item.map((image) => (
                    <Box sx={sx.item}>
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
