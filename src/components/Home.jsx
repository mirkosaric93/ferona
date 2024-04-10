import { useState } from "react";
import NavBar from "./NavBar";
import HomeImage from "./HomeImage";
import Footer from "./Footer";
import Galery from "./Gallery";
import Contact from "./Contact";
import languages from "../values/languages";
import Image from "./Image";
import logo from "../img/Logo.png";

function Home() {
  const [home, setHome] = useState(true);
  const [galery, setGalery] = useState(false);
  const [contact, setContact] = useState(false);
  const [language, setLanguage] = useState(languages.srb);
  const [logoAnim, setLogoAnim] = useState(true);

  function handleCloseHamburgerMenu() {
    document.querySelector(".openedHamburger").style.display = "none";
  }
  setTimeout(() => setLogoAnim(false), 4000);

  return (
    <div>
      {logoAnim && (
        <div className="startedLogoContainer">
          <Image img={logo} alt="Started Logo" styledClass="startedLogo" />
        </div>
      )}

      {logoAnim || (
        <NavBar
          setHome={setHome}
          setGalery={setGalery}
          setContact={setContact}
          language={language}
          setLanguage={setLanguage}
          handleCloseMenu={handleCloseHamburgerMenu}
        />
      )}
      {logoAnim ||
        (home && (
          <HomeImage
            language={language}
            handleCloseMenu={handleCloseHamburgerMenu}
          />
        ))}
      {logoAnim ||
        (galery && (
          <Galery
            handleCloseMenu={handleCloseHamburgerMenu}
            language={language}
          />
        ))}
      {logoAnim ||
        (contact && (
          <Contact
            language={language}
            handleCloseMenu={handleCloseHamburgerMenu}
          />
        ))}
      {logoAnim || <Footer />}
    </div>
  );
}

export default Home;
