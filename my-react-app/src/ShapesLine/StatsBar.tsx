import { useState } from "react";
import ShapesLine from "./ShapesLine";

const StatsBar = () => {
  const [direction, setDirection] = useState("horizontal");
  const [clickStats, setClickStats] = useState({
    "red circle": 0,
    "blue star": 0,
    "green triangle": 0
  });

  const handleDirectionChange = () => {
    setDirection(direction === "horizontal" ? "vertical" : "horizontal");
  };

  const handleShapeClick = (shapeName) => {
    setClickStats((prevStats) => ({
      ...prevStats,
      [shapeName]: prevStats[shapeName] + 1
    }));
  };

  const renderClickStats = () => {
    return (
      <div>
        <h3>Click Statistics:</h3>
        <p>Red Circle: {clickStats["red circle"]}</p>
        <p>Blue Star: {clickStats["blue star"]}</p>
        <p>Green Triangle: {clickStats["green triangle"]}</p>
      </div>
    );
  };

  return (
    <div>
      <div>
        <button onClick={handleDirectionChange}>
          {direction === "horizontal" ? "Switch to Vertical" : "Switch to Horizontal"}
        </button>
      </div>
      <div>
        <ShapesLine direction={direction} tlColor="red" tfrType="circle" onClick={() => handleShapeClick("red circle")} />
        <ShapesLine direction={direction} tlColor="blue" tfrType="star" onClick={() => handleShapeClick("blue star")} />
        <ShapesLine direction={direction} tlColor="green" tfrType="triangle" onClick={() => handleShapeClick("green triangle")} />
      </div>
      {renderClickStats()}
    </div>
  );
};

export default StatsBar;
