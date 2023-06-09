export const caracterSx = {
  bodyCara: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  mainCara: {
    display: "flex",
    width: { xs: "100%", md: "70%" },
    height: "100%",
    justifyContent: { xs: "space-around", md: "space-around" },
    alignItems: "center",
    // backgroundColor: "blue",
    flexDirection: { xs: "column", md: "unset" },
  },
  iconClick: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "unset", md: "40px" },
    alignItems: "center",
    marginTop: { xs: "unset", md: "-500px" },
  },
  textCara: {
    fontWeight: "400",
    fontSize: { xs: "48px", md: "64px" },
    lineHeight: { xs: "59px", md: "79px" },
    fontFamily: "Metal Mania",
    color: "white",
    letterSpacing: " 0.15em",
    fontStyle: "normal",
    width: { xs: "328px", md: "unset" },
    textAlign: { xs: "end", md: "unset" },
    marginTop: { xs: "unset", md: "-100px" },
  },
  imageCara: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 0,
  },
  boxDesc: {
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
  },
  textName: {
    fontWeight: "400",
    fontSize: { xs: "36px", md: "48px" },
    lineHeight: { xs: "45px", md: "60px" },
    fontFamily: "Merriweather",
    fontStyle: "normal",
  },
  textDesc: {
    fontWeight: "400",
    fontSize: { xs: "14px", md: "18px" },
    lineHeight: { xs: "18px", md: "28px" },
    width: { xs: "280px", md: "597px" },
    textAlign: "center",
    fontFamily: "Merriweather",
    fontStyle: "normal",
  },
  iconImageMb: {
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: "20px", md: "20px" },
    display: { xs: "unset", md: "none" },
    marginTop: { xs: "-50px", md: "unset" },
    paddingBottom: { xs: "50px", md: "unset" },
  },
};
