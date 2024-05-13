import React, { useContext } from "react";
import { ShapesLineContext } from "./ShapesLineProvider";
import Shape from "./Shape";

const ShapesList = () => {
  const { shapes, updateShape, resetClickCount } = useContext(ShapesLineContext);

  const handleShapeClick = (id) => {
    const updatedShapes = shapes.map((shape) =>
      shape.id === id ? { ...shape, clickCount: shape.clickCount + 1 } : shape
    );
    updateShape(id, updatedShapes.find((shape) => shape.id === id));
  };

  const handleResetClickCount = (id) => {
    resetClickCount(id);
  };


  return (
    <div>
      <h2>Фігури</h2>
      {shapes.length > 0 ? (
        shapes.map((shape) => (
          <div key={shape.id}>
            <Shape
              tlColor={shape.tlColor}
              tfrType={shape.tfrType}
              onClick={() => handleShapeClick(shape.id)}
            />
            <span>ID: {shape.id}</span><br/>
            <span>Кількість кліків: {shape.clickCount}</span><br/>
            <button onClick={() => handleResetClickCount(shape.id)}>Обнулити лічильник</button>
          </div>
        ))
      ) : (
        <p>Немає фігур</p>
      )}
    </div>
  );
};

export default ShapesList;
