import PropTypes from "prop-types";

function ButtonNav({ styleName, children, handleBtn, handleCloseMenu }) {
  return <button className={styleName} 
  onClick={ ()=>{
    handleBtn()
    handleCloseMenu()
  }
  }
  >{children}</button>;
}

ButtonNav.propTypes = {
    children: PropTypes.node.isRequired,
    styleName: PropTypes.node.isRequired,
    handleBtn: PropTypes.func,
    handleCloseMenu: PropTypes.func,
  };

export default ButtonNav;