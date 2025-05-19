import { useState } from "react";

export const SelectableGrid = ({ rows = 10, columns = 10 }) => {
  const [isMouseDown, setMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleMouseUp = () => {};
  const handleMouseDown = () => {};
  const handleMouseEnter = () => {};

  return (
    <div
      className="grid"
      style={{ "--rows": rows, "--cols": columns }}
      onMouseUp={handleMouseUp}
    >
      {[...Array(rows * columns).keys()].map((_, i) => (
        <div
          key={i}
          className={`box`}
          onMouseDown={() => {
            handleMouseDown(i + 1);
          }}
          onMouseEnter={() => {
            handleMouseEnter(i + 1);
          }}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
