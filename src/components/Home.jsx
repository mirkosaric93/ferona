import { useState } from "react";
import NavBar from "./NavBar";
import HomeImage from "./HomeImage";
import Footer from "./Footer";
import Galery from "./Galery";
import Contact from "./Contact";
import languages from "../values/languages";

function Home() {
  const [home, setHome] = useState(true);
  const [galery, setGalery] = useState(false);
  const [contact, setContact] = useState(false);
  const [language, setLanguage] = useState(languages.srb);

  function handleCloseHamburgerMenu(){
    document.querySelector(".openedHamburger").style.display = "none";
  }

  return (
    <div>
      <NavBar
        setHome={setHome}
        setGalery={setGalery}
        setContact={setContact}
        language={language}
        setLanguage={setLanguage}
        handleCloseMenu={handleCloseHamburgerMenu}
      />
      {home && <HomeImage language={language} handleCloseMenu={handleCloseHamburgerMenu} />}
      {galery && <Galery handleCloseMenu={handleCloseHamburgerMenu} language={language} />}
      {contact && <Contact language={language} handleCloseMenu={handleCloseHamburgerMenu} />}
      <Footer />
    </div>
  );
}

export default Home;
