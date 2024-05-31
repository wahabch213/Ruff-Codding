import "../App.css";
import React, { useRef, useState } from "react";

function wahab() {
  const [textColor, setTextColor] = useState("blue");
  const textRef = useRef();

  const handleColorChange = (color) => {
    setTextColor(color);
  };

  const bgcolor = useRef();

  return (
    <div>
      <h1 ref={textRef} style={{ color: textColor }}>
        Hello, World!
      </h1>
      <div className="main" ref={bgcolor}></div>
      <button onClick={() => (bgcolor.current.style.background = "red")}>
        Red
      </button>
      <button onClick={() => (bgcolor.current.style.background = "blue")}>
        Blue
      </button>
      <button onClick={() => (bgcolor.current.style.background = "green")}>
        Green
      </button>
    </div>
  );
}

export default wahab;
