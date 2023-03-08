import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // setPosition({ x: e.clientX, y: e.clientY });
    //객체를 return 할때는 소괄호로 반드시 묶어야 한다.
    setPosition((prev) => ({ x: e.clientX, y: prev.y }));
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
