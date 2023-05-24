export const giftSx = {
  leftSide: {
    width: { xs: "100%", md: "50%" },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  containerLeftSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "unset", md: "space-around" },
    flexDirection: "column",
    width: { xs: "unset", md: "840px" },
    height: { xs: "400px", md: "690px" },

    marginTop: { xs: "140px", md: "unset" },
    gap: { xs: "20px", md: "unset" },
  },
  mainLogo: {
    width: { xs: "284px", md: "604px" },
    height: { xs: "84px", md: "180px" },
    position: "relative",
    zIndex: 1,
  },
  mainText: {
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
  },
  giftText: {
    fontWeight: "700",
    fontSize: { xs: "14px", md: "24px" },

    fontFamily: "Merriweather",
    fontStyle: "normal",
  },
  leftImageMain: {
    animation: { xs: "unset", md: "MoveUpDown 4s ease infinite" },
    width: { xs: "390px", md: "1060px" },
    height: { xs: "268px", md: "669px" },
    position: "absolute",
    zIndex: 0,
    right: { xs: "unset", md: 0 },
    marginTop: { xs: "120px", md: "unset" },
  },
};
