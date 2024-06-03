import { useState } from "react";

export default function BgChanger() {
  const [color, setColor] = useState("olive");

  const handleColor = (color) => {
    setColor((prevColor) => (prevColor === color ? "" : color));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => handleColor("green")}>Green</button>
      <button onClick={() => handleColor("blue")}>Blue</button>
      <button onClick={() => handleColor("yellow")}>Yellow</button>
      <button onClick={() => handleColor("white")}>White</button>
      <button onClick={() => handleColor("black")}>Black</button>
    </div>
  );
}
