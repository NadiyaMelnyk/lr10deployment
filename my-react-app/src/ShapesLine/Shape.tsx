import PropTypes from "prop-types";
import { useState } from "react";

const Shape = ({ tlColor = 'red', tfrType = 'circle', onClick }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (onClick) {
      onClick();
    }
  };

  const renderShape = () => {
    switch (tfrType) {
      case 'circle':
        return <div style={{ backgroundColor: tlColor, width: "50px", height: "50px", borderRadius: '50%' }} onClick={handleClick}></div>;
      case 'square':
        return <div style={{ backgroundColor: tlColor, width: "50px", height: "50px" }} onClick={handleClick}></div>;
      case 'star':
        return <div style={{ color: tlColor, fontSize: "50px" }} onClick={handleClick}>&#9733;</div>;
      case 'triangle':
        return <div style={{ borderBottom: `50px solid ${tlColor}`, borderLeft: "25px solid transparent", borderRight: "25px solid transparent", width: 0, height: 0 }} onClick={handleClick}></div>;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderShape()}
      {/* {clickCount} */}
    </div>
  );
};

Shape.propTypes = {
  tlColor: PropTypes.string,
  tfrType: PropTypes.oneOf(['circle', 'square', 'triangle', 'star']),
  onClick: PropTypes.func
};

export default Shape;
