import { Box } from "@mui/material";
import React, { useState } from "react";

function SlideFuture() {
  const [features, setFeatures] = useState([
    {
      id: 1,
      image: "../../../image/Slide 1.jpg",
      isActive: true,
    },
    {
      id: 2,
      image: "../../../image/Slide 2.jpg",
      isActive: false,
    },
    {
      id: 3,
      image: "../../../image/Slide 3.jpg",
      isActive: false,
    },
    {
      id: 4,
      image: "../../../image/Slide 4.jpg",
      isActive: false,
    },
    {
      id: 5,
      image: "../../../image/Slide 5.jpg",
      isActive: false,
    },
  ]);
  const [activeFeature, setActiveFeature] = useState(
    features.find((item) => item.isActive)
  );

  const changeActive = (id) => {
    setFeatures((prev) =>
      prev.map((item) => ({ ...item, isActive: item.id === id }))
    );
    setActiveFeature(features.find((item) => item.id === id));
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", md: "40px" },
        }}
      >
        <Box>
          <Box
            component="img"
            src={activeFeature.image}
            sx={{
              boxShadow: "(0px 8px 12px rgba(0, 0, 0, 0.5))",
              width: { xs: "328px", md: "unset" },
              height: { xs: "172px", md: "unset" },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "10px", md: "20px" },
          }}
        >
          {features.map((item) => (
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
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SlideFuture;
