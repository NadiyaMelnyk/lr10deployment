import React, { useState } from "react";
import { useShapesLineContext } from "./ShapesLineProvider";

const ShapesLineForm = () => {
  const { addShape, updateShape, deleteShape } = useShapesLineContext();
  const [idAdd, setIdAdd] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  const [idDelete, setIdDelete] = useState("");
  const [tlColor, setTlColor] = useState("");
  const [tfrType, setTfrType] = useState("");
  const [newTlColor, setNewTlColor] = useState("");
  const [newTfrType, setNewTfrType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addShape({ tlColor, tfrType });
    setTlColor("");
    setTfrType("");
  };

  const handleUpdate = () => {
    updateShape(idUpdate, { tlColor: newTlColor, tfrType: newTfrType });
  };

  const handleDelete = () => {
    deleteShape(idDelete);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Color"
          value={tlColor}
          onChange={(e) => setTlColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Shape Type"
          value={tfrType}
          onChange={(e) => setTfrType(e.target.value)}
        />
        <button type="submit">Add Shape</button>
      </form>

      <form>
        <input
          type="text"
          placeholder="ID"
          value={idUpdate}
          onChange={(e) => setIdUpdate(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Color"
          value={newTlColor}
          onChange={(e) => setNewTlColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Shape Type"
          value={newTfrType}
          onChange={(e) => setNewTfrType(e.target.value)}
        />
        <button type="submit" onClick={handleUpdate}>
          Update Shape
        </button>
      </form>

      <form>
        <input
          type="text"
          placeholder="ID"
          value={idDelete}
          onChange={(e) => setIdDelete(e.target.value)}
        />
        <button type="submit" onClick={handleDelete}>
          Delete Shape
        </button>
      </form>
    </div>
  );
};

export default ShapesLineForm;
