/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function RandomColor() {
  // Lets Take 2 states
  // Ist one is for the type of the color
  const [typeOfColor, setTypeOfColor] = useState("hex");
  // 2nd For Generating the Random color
  const [color, setColor] = useState("#000000");

  // Now Lets Create A function For generating Random Numbers
  const randomNum = (length) => Math.floor(Math.random() * length);

  //   Now Lets Create A function to generate a hex Value color
  const handleCreateHexColor = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let initializeColor = "#";
    for (let i = 0; i < 6; i++) {
      initializeColor += hex[randomNum(hex.length)];
    }
    setColor(initializeColor);
    console.log(initializeColor);
  };

  //   lets Create Another function for the RGB color
  const handleCreateRgbColor = () => {
    const r = randomNum(256);
    const g = randomNum(256);
    const b = randomNum(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  };

  //   We will Use UseEffect for every time when we change the type of color it should quickly change
  //   useEffect(() => {
  //     if (typeOfColor === "hex") handleCreateHexColor();
  //     else handleCreateRgbColor();
  //   }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>CreateHex</button>
      <button onClick={() => setTypeOfColor("rgb")}>CreateRgb</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          fontSize: "60px",
          color: "white",
        }}
      >
        <h3>{typeOfColor === "hex" ? "Hex Color" : "rgb Color"}</h3>
        {color}
      </div>
    </div>
  );
}
