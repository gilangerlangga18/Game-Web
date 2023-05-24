import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

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
      defaultIcon: "../../../image/Avatar_Blood_Blade off.png",
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
        width: { xs: "100%", md: "unset" },
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "70%" },
            height: "100%",
            justifyContent: { xs: "space-around", md: "space-around" },
            alignItems: "center",
            // backgroundColor: "blue",
            flexDirection: { xs: "column", md: "unset" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "unset", md: "40px" },
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { xs: "48px", md: "64px" },
                lineHeight: { xs: "59px", md: "79px" },
                fontFamily: "Metal Mania",
                color: "white",
                letterSpacing: " 0.15em",
                fontStyle: "normal",
                width: { xs: "328px", md: "unset" },
                textAlign: { xs: "end", md: "unset" },
              }}
            >
              Character Class
            </Typography>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                zIndex: 0,
              }}
            >
              <Box
                component="img"
                src={activeChara.image}
                sx={{
                  width: "unset",
                  height: { xs: "327px", md: "600px" },
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "320px", md: "600px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: "40px 20px 40px 20px", md: "30px" },
                background: "rgba(0, 0, 0, 0.65)",
                color: "white",
                marginTop: { xs: "unset", md: "-30px" },
                position: "relative",
                zIndex: "10",
                gap: { xs: "20px", md: "" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: "36px", md: "48px" },
                  lineHeight: { xs: "45px", md: "60px" },
                  fontFamily: "Merriweather",
                  fontStyle: "normal",
                }}
              >
                {activeChara.name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: "14px", md: "18px" },
                  lineHeight: { xs: "18px", md: "28px" },
                  width: { xs: "280px", md: "597px" },
                  textAlign: "center",
                  fontFamily: "Merriweather",
                  fontStyle: "normal",
                }}
              >
                {activeChara.description}
              </Typography>
            </Box>
          </Box>
          {/* +++++++++++++++++++++++++++++++++ */}

          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "20px", md: "20px" },
              display: { xs: "unset", md: "none" },
              marginTop: { xs: "-50px", md: "unset" },
              paddingBottom: { xs: "50px", md: "unset" },
            }}
          >
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
