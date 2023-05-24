import "./App.css";
import PageGift from "../src/PageGift";
import { Box } from "@mui/material";
import PageYoutube from "./PageYoutube";
import Pagecara from "./pageCara";
import Pagefeature from "./PageFeature";
import Footer from "./Footer";
import TransitionsModal from "./ModalItem";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <Box sx={{ overflow: "hidden" }}>
      <PageGift openModal={openModal} />
      <PageYoutube />
      <Pagecara />
      <Pagefeature />
      <Footer />
      <TransitionsModal close={closeModal} isOpen={isOpen} />
    </Box>
  );
}

export default App;
