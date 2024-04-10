import { imageGalery } from "../values/galery";
import Image from "./Image";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Galery({ handleCloseMenu, language }) {
  const [currentId, setCurrentId] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  function handleCurrentForward() {
    if (currentId >= imageGalery.length - 1) {
      setCurrentId(0);
    } else {
      setAutoSlide(false);
      setCurrentId(currentId + 1);
    }
  }
  function handleCurrentBack() {
    if (currentId === 0) {
      setCurrentId(imageGalery.length - 1);
    } else {
      setAutoSlide(false);
      setCurrentId(currentId - 1);
    }
  }

  //Automatic Slider Galery
  autoSlide &&
    setTimeout(() => {
      if (currentId >= imageGalery.length - 1) {
        setCurrentId(0);
      } else {
        setCurrentId(currentId + 1);
      }
    }, 3500);

  return (
    <>
      <p className="title">{language.gallery}</p>
      <div className="galeryContainer" onClick={handleCloseMenu}>
        <div className="galeryImages">
          <button
            id="leftBtn"
            className="arrowBtn"
            onClick={() => handleCurrentBack()}
          >
            &#8592;
          </button>
          {imageGalery.map((img) => (
            <Image
              img={img.img}
              alt={img.alt}
              styledClass={
                currentId === img.id ? "galeryImage" : "galeryNoneImage"
              }
              key={img.id}
            />
          ))}
          <button
            id="rightBtn"
            className="arrowBtn"
            onClick={() => handleCurrentForward()}
          >
            &#8594;
          </button>
        </div>
        <div className="dotContainer">
          {imageGalery.map((el) => {
            return (
              <div
                key={el.id}
                className={el.id === currentId ? "activeDot" : "dot"}
                onClick={() => {
                  setAutoSlide(false);
                  setCurrentId(el.id);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

Galery.propTypes = {
  handleCloseMenu: PropTypes.func,
  language: PropTypes.string,
};
