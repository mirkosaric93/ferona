import PropTypes from "prop-types";

function ButtonNav({ styleName, children, handleBtn }) {
  return <button className={styleName} onClick={handleBtn}>{children}</button>;
}

ButtonNav.propTypes = {
    children: PropTypes.node.isRequired,
    styleName: PropTypes.node.isRequired,
    handleBtn: PropTypes.func,
  };

export default ButtonNav;