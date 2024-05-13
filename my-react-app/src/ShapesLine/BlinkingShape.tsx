import { motion } from "framer-motion";
import { useState, useRef } from "react";

const BlinkingShape = () => {
  const ref = useRef(0);
  const [isClick, setIsClick] = useState(false);

  return (
    <motion.div
      className="box"
      key={ref.current}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isClick ? [1, 0.5, 1] : 1, scale: 1 }}
      transition={{ duration: 1 }}
      onClick={() => {
        ref.current++;
        setIsClick(!isClick);
      }}
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        backgroundColor: "blue",
      }}
    />
  );
};

export default BlinkingShape;
