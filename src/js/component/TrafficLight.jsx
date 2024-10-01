import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");
  const colors = ["green", "yellow", "red"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className="traffic-top"></div>
      <div className="traffic-light">
        <div
          className={`redLight red ${color === "red" ? "glow-red" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`yellowLight yellow ${
            color === "yellow" ? "glow-yellow" : ""
          }`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`greenLight green ${
            color === "green" ? "glow-green" : ""
          }`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
