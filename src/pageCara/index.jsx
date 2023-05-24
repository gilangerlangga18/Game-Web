import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { caracterSx as sx } from "./styles";

function CharaSelector({ icon, position, onClick }) {
  let customSx = {};
  switch (position) {
    case "top":
      customSx = {
        left: "135px",
      };
      break;
    case "right":
      customSx = {
        top: "135px",
        left: "20px",
      };
      break;
    case "left":
      customSx = {
        bottom: "120px",
      };
      break;
    case "bottom":
      customSx = {
        right: "115px",
        top: "15px",
      };
      break;
    default:
      break;
  }
  return (
    <Box
      onClick={onClick}
      component="img"
      src={icon}
      sx={{
        position: "relative",
        cursor: "pointer",
        width: "250px",
        height: "250px",
        ...customSx,
      }}
    />
  );
}

function Pagecara() {
  const initialValues = [
    {
      id: 1,
      defaultIcon: "../../../image/Avatar_Blood_Blade_off.png",
      activeIcon: "../../../image/Avatar Blood Blade.png",
      position: "top",
      isActive: true,
      name: "Blood Blade",
      description:
        " Mele class with the power of blade will kill all the enemies without mercies",
      image: "../../../image/Char Blood Blade.gif",
    },
    {
      id: 2,
      defaultIcon: "../../../image/Avatar Dragon Spear off.png",
      activeIcon: "../../../image/Avatar Dragon Spear.png",
      position: "right",
      isActive: false,
      name: "Dragon Spear",
      description:
        "Mele class with power of dragon involves, never retreat or surrender",
      image: "../../../image/Char Dragon Spear.gif",
    },
    {
      id: 3,
      defaultIcon: "../../../image/Avatar Divine Talisman off.png",
      activeIcon: "../../../image/Avatar Divine Talisman.png",
      position: "left",
      isActive: false,
      name: "Divine Talisman",
      description:
        "Range class strong magic and every deadly, keep an eagles or you will hurt so bad",
      image: "../../../image/Char Divine Talisman.gif",
    },
    {
      id: 4,
      defaultIcon: "../../../image/Avatar Immortal Sword off.png",
      activeIcon: "../../../image/Avatar Immortal Sword.png",
      position: "bottom",
      isActive: false,
      name: "Immortal Sword",
      description:
        "Range class master of sword make it even can fly through the enemies very fast",
      image: "../../../image/Char Immortal Sword.gif",
    },
  ];
  const [charaList, setCharaList] = useState(initialValues);
  const [activeChara, setActiveChara] = useState(
    initialValues.find((item) => item.isActive)
  );

  const changeActive = (id) => {
    setActiveChara(charaList.find((item) => item.id === id));
    setCharaList((prev) => {
      return prev.map((item) => ({ ...item, isActive: item.id === id }));
    });
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("../../../image/Background Section 3.jpg")',
        height: { xs: "896px", md: "1128px" },
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box sx={sx.bodyCara}>
        <Box sx={sx.mainCara}>
          <Box sx={sx.iconClick}>
            <Typography sx={sx.textCara}>Character Class</Typography>
            {/* <CharaSelector /> */}
            <Box
              sx={{
                width: "520px",
                height: "520px",
                position: "absolute",
                display: { xs: "none", md: "unset" },
              }}
            >
              {charaList.map((item) => (
                <CharaSelector
                  key={item.id}
                  icon={item.isActive ? item.activeIcon : item.defaultIcon}
                  onClick={() => {
                    changeActive(item.id);
                  }}
                  position={item.position}
                />
              ))}
            </Box>
          </Box>
          <Box>
            <Box sx={sx.imageCara}>
              <Box
                component="img"
                src={activeChara.image}
                sx={{
                  width: "unset",
                  height: { xs: "327px", md: "600px" },
                }}
              />
            </Box>
            <Box sx={sx.boxDesc}>
              <Typography sx={sx.textName}>{activeChara.name}</Typography>
              <Typography sx={sx.textDesc}>
                {activeChara.description}
              </Typography>
            </Box>
          </Box>
          {/* +++++++++++++++++++++++++++++++++ */}

          <Box sx={sx.iconImageMb}>
            {charaList.map((item) => (
              <Box
                onClick={() => changeActive(item.id)}
                component="img"
                src={
                  item.isActive
                    ? "../../../image/Bullet Slider On.png"
                    : "../../../image/Bullet Slider Off.png"
                }
                sx={{
                  width: { xs: "40px", md: "unset" },
                  height: { xs: "40px", md: "unset" },
                }}
              />
            ))}
          </Box>

          {/* +++++++++++++++++++++++++++++++++ */}
        </Box>
      </Box>
    </Box>
  );
}

export default Pagecara;
