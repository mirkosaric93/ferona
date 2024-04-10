import Map from "./Map";
import PropTypes from "prop-types";

export default function Contact({ language, handleCloseMenu }) {
  return (
    <>
      <p className="title">{language.contact}</p>
      <div className="contactContainer" onClick={handleCloseMenu}>
        <div className="ownerContact">
          <div>
            {/* <p>Telefon:</p> */}
            <p>{language.phone}:</p>
            <a href="tel:0644013499">+381644013499</a>
          </div>
          <div>
            <p>Email:</p>
            <a href="mailto:standanelena@gmail.com">standanelena@gmail.com</a>
          </div>
          <div>
            <p>Instagram:</p>
            <a href="https://www.instagram.com/stannadanelena/" target="_blank">
              {language.name}
            </a>
          </div>
        </div>
        <div className="map">
          <p>{language.map}</p>
          <p>
            <b>{language.street}</b>
          </p>
          <Map />
        </div>
      </div>
    </>
  );
}

Contact.propTypes = {
  language: PropTypes.object,
  handleCloseMenu: PropTypes.func,
};
