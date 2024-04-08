import PropTypes from "prop-types";
import ButtonNav from "./ButtonNav";
import Image from "./Image";
import logo from "../img/Logo.png";
import srb from "../img/srb.png";
import eng from "../img/eng.png";
import languages from "../values/languages";

function NavBar({
  setHome,
  setGalery,
  setContact,
  setLanguage,
  language,
  handleCloseMenu,
}) {
  function handleHomeBtn() {
    setHome(true);
    setGalery(false);
    setContact(false);
  }
  function handleGaleryBtn() {
    setHome(false);
    setGalery(true);
    setContact(false);
  }
  function handleContactBtn() {
    setHome(false);
    setGalery(false);
    setContact(true);
  }
  function handleHamburgerMenu() {
    document.querySelector(".openedHamburger").style.display = "flex";
  }
  return (
    <div className="navBar">
      <div className="leftSideNav">
        <Image
          img={logo}
          alt="Logo"
          styledClass="navLogo"
          // onClick={handleHomeBtn}
        />
      </div>
      <div className="rightSideNav">
        <ButtonNav styleName="headBtn" handleBtn={handleHomeBtn}>
          {language.home}
        </ButtonNav>
        <ButtonNav styleName="headBtn" handleBtn={handleGaleryBtn}>
          {language.galery}
        </ButtonNav>
        <ButtonNav styleName="headBtn" handleBtn={handleContactBtn}>
          {language.contact}
        </ButtonNav>
        <div className="languageNav">
          <Image
            img={srb}
            alt="Serbia Language Logo"
            styledClass={
              language === languages.srb
                ? "languageLogo activeLanguage"
                : "languageLogo"
            }
            handleFunc={() => {
              setLanguage(languages.srb);
            }}
          />
          <Image
            img={eng}
            alt="English Language Logo"
            styledClass={
              language === languages.eng
                ? "languageLogo activeLanguage"
                : "languageLogo"
            }
            handleFunc={() => {
              setLanguage(languages.eng);
            }}
          />
        </div>
      </div>

      <div className="hamburgerContainer">
        <div className="languageNav">
          <Image
            img={srb}
            alt="Serbia Language Logo"
            styledClass={
              language === languages.srb
                ? "languageLogo activeLanguage"
                : "languageLogo"
            }
            handleFunc={() => {
              setLanguage(languages.srb);
            }}
          />
          <Image
            img={eng}
            alt="English Language Logo"
            styledClass={
              language === languages.eng
                ? "languageLogo activeLanguage"
                : "languageLogo"
            }
            handleFunc={() => {
              setLanguage(languages.eng);
            }}
          />
        </div>
        <div className="hamburgerMenu" onClick={handleHamburgerMenu}>
          &#9776;
          <p>{language.menu}</p>
        </div>
      </div>

      <div className="openedHamburger">
        <p className="closeMenu" onClick={handleCloseMenu}>
          X
        </p>
        <ButtonNav styleName="hamburgerBtn" handleBtn={handleHomeBtn}>
          {language.home}
        </ButtonNav>
        <ButtonNav styleName="hamburgerBtn" handleBtn={handleGaleryBtn}>
          {language.galery}
        </ButtonNav>
        <ButtonNav styleName="hamburgerBtn" handleBtn={handleContactBtn}>
          {language.contact}
        </ButtonNav>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  setHome: PropTypes.func,
  setGalery: PropTypes.func,
  setContact: PropTypes.func,
  language: PropTypes.object,
  setLanguage: PropTypes.func,
  handleCloseMenu: PropTypes.func,
};

export default NavBar;
