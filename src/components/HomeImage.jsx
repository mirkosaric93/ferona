import Image from "./Image";
import ferona from "../img/ferona.png";
import logo from "../img/Logo.png";
import PropTypes from "prop-types";

function HomeImage({ language, handleCloseMenu }) {
  return (
    <>
      <p className="title">{language.home}</p>
      <div
        className="coverImages"
        onClick={handleCloseMenu}
      >
        <Image img={logo} alt="Central Logo" styledClass="centralLogo" />
        <Image img={ferona} alt="Image Slider 1" styledClass="coverImage" />

        {language.text}
      </div>
    </>
  );
}

HomeImage.propTypes = {
  language: PropTypes.object,
  handleCloseMenu: PropTypes.func,
};

export default HomeImage;
