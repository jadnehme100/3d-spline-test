import React from "react";
import Spline from "@splinetool/react-spline";
import "./cube.scss";
const Cube = () => {
  const clicked = () => {
    console.log("clickeddddddddddd");
  };

  return (
    <div onClick={clicked}>
      <Spline scene='https://prod.spline.design/wSpLcbdJ4WeHUNf3/scene.splinecode' />
    </div>
  );
};

export default Cube;
