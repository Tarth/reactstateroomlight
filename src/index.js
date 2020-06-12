import React, { useState } from "react";
import ReactDOM from "react-dom";
import cold from "./img/snowflake.png";
import "./index.css";

function Room() {
  const [isLit, setLit] = useState(true);
  const [temperature, setTemperature] = useState(6);

  const brightness = isLit ? "lit" : "dark";

  return (
    <div className={`room ${brightness}`}>
      The room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
      <br />
      <button onClick={() => setLit(true)}>Turn the light on!</button>
      <br />
      <button onClick={() => setLit(false)}>Turn the light off</button>
      <br />
      <h1>{temperature}</h1>
      <br />
      <OnButton
        setTemperature={setTemperature}
        temperature={temperature}
      ></OnButton>
      <ImageHandler temperature={temperature}></ImageHandler>
      <br />
      <OffButton
        setTemperature={setTemperature}
        temperature={temperature}
      ></OffButton>
    </div>
  );
}

function OnButton({ setTemperature, temperature }) {
  return <button onClick={() => setTemperature((temperature += 1))}>+</button>;
}

function OffButton({ setTemperature, temperature }) {
  return <button onClick={() => setTemperature((temperature -= 1))}>-</button>;
}

function ImageHandler({ temperature }) {
  let imageUrl = null;

  if (temperature <= 5) {
    imageUrl = { cold };
  }

  return <img src={imageUrl}></img>;
}

ReactDOM.render(
  <div className="room">
    <Room />
  </div>,
  document.getElementById("root")
);
