// json-server --watch db.json --port 3000

export const ShapesLineProvider = ({ children }) => {
    const [shapes, setShapes] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/shapes")
        .then((response) => response.json())
        .then((data) => setShapes(data))
        .catch((error) => console.error("Error fetching shapes:", error));
    }, []);
  
    const addShape = async (newShape) => {
      try {
        const response = await fetch("http://localhost:3000/shapes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...newShape, clickCount: 0}),
        });
        const data = await response.json();
        setShapes([...shapes, data]);
      } catch (error) {
        console.error("Error adding shape:", error);
      }
    };
  
    const updateShape = async (id, updatedShape) => {
      try {
        const response = await fetch(`http://localhost:3000/shapes/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedShape),
        });
        if (response.ok) {
          const updatedShapes = shapes.map((shape) =>
            shape.id === id ? updatedShape : shape
          );
          setShapes(updatedShapes);
        }
      } catch (error) {
        console.error("Error updating shape:", error);
      }
    };
  
    const deleteShape = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/shapes/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          const updatedShapes = shapes.filter((shape) => shape.id !== id);
          setShapes(updatedShapes);
        }
      } catch (error) {
        console.error("Error deleting shape:", error);
      }
    };
  
    const resetClickCount = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/shapes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const updatedShapes = shapes.map((shape) =>
            shape.id === id ? { ...shape, clickCount: 0 } : shape
          );
          setShapes(updatedShapes);
        }
      } catch (error) {
        console.error("Error resetting click count:", error);
      }
    };
  
    return (
      <ShapesLineContext.Provider
        value={{ shapes, addShape, updateShape, deleteShape, resetClickCount }}
      >
        {children}
      </ShapesLineContext.Provider>
    );
  };
  