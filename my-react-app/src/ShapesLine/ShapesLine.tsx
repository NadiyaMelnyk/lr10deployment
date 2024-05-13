import PropTypes from "prop-types";
import Shape from "./Shape";

const ShapesLine = ({ direction, tlColor, tfrType, onClick }) => {
    const handleShapeClick = () => {
        onClick(tfrType);
    };

  const renderShapes = () => {
    const shapes = [];
    for (let i = 0; i < 5; i++) {
      shapes.push(
        <Shape
          key={i}
          tlColor={tlColor}
          tfrType={tfrType}
          onClick={handleShapeClick}
        />
      );
    }
    return shapes;
  };

  return (
    <div style={{ display: "flex", flexDirection: direction === "horizontal" ? "row" : "column" }}>
      {renderShapes()}
    </div>
  );
};

ShapesLine.propTypes = {
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  tlColor: PropTypes.string,
  tfrType: PropTypes.oneOf(['circle', 'square', 'star', 'triangle']),
  onClick: PropTypes.func
};

export default ShapesLine;
