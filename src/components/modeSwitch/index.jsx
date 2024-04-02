import { useState } from "react";
import "./style.css";

export default function SwitchMode() {
  const [theme, setTheme] = useState("light");

  const hanldeToggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  console.log(theme);
  return (
    <div className={`theme-container ${theme === "light" ? "light" : "dark"}`}>
      <p>Hello World</p>
      <button onClick={hanldeToggleTheme}>
        Theme {theme !== "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
