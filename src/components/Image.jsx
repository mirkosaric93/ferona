import PropTypes from 'prop-types';

function Image({img, alt, styledClass, handleFunc}){
    return(
        <img src={img} className={styledClass} alt={alt} onClick={handleFunc}/>
    )
}

Image.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    styledClass: PropTypes.string.isRequired,
    handleFunc: PropTypes.func,
  };

export default Image;