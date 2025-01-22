import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [countNumber, setCounterNumber] = useState(0);

  const onButtonClick = (color) => () => {
    if(backgroundColor !== color)
      setCounterNumber(countNumber+1);
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}

      <h1>{countNumber}</h1>
    </div>
  );
}

export default App;
