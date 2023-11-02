import { useEffect, useState } from "react";
export const Moving = () => {
  const [left, setLeft] = useState(100);
  const [top, setTop] = useState(200);

  const [canMove, setCanMove] = useState(false);

  const moveHandler = (e: React.MouseEvent<Element, MouseEvent>) => {
     if (canMove) {
      setLeft(left + e.movementX);
      setTop(top + e.movementY);
    }
  };

  
  return (
    <div
      onMouseDown={()=>setCanMove(true)}
      onMouseUp={() => setCanMove(false)}
      onMouseMove={(e)=>moveHandler(e)}
      onMouseOut={() => setCanMove(false)}
      style={{
        width: "50px",
        height: "50px",
        position: "absolute",
        left: `${left}px`,
        top: `${top}px`,
        backgroundColor: "#0000FF",
        zIndex: 100,
      }}
    ></div>
  );
};
export default Moving;
