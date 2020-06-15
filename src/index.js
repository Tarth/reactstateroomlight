import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  const [items, setItems] = useState(null); 
  const [isLit, setLit] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [date] = useState(Date());
  const brightness = isLit ? "lit" : "dark";

  if (items === null){
    DataHandler(setItems);
  }

  
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
      <h2>{date}</h2>
      <OnButton
        setTemperature={setTemperature}
        temperature={temperature}
      ></OnButton>
      <br />
      <OffButton
        setTemperature={setTemperature}
        temperature={temperature}
      ></OffButton>
      <br />
      <ImageHandler temperature={temperature}></ImageHandler>
      <br />
      <div>
        <button onClick={() => setTemperature(-temperature)}>Flip temp</button>
      </div>
    </div>
  );
}

function DataHandler(setItems) {
  let data = require("./sampledata.json");
  let jobdata = [];
  
  for (let i = 0; i < data.jobs.length; i++){
    let username = data.jobs[i].user;
    let startdate = data.jobs[i].startdate;
    let startmonth = data.jobs[i].startmonth;
    let startyear = data.jobs[i].startyear;
    let enddate = data.jobs[i].enddate;
    let endmonth = data.jobs[i].endmonth;
    let endyear = data.jobs[i].endyear;
    
    let startdato = new Date(startyear, startmonth, startdate);
    let slutdato = new Date(endyear, endmonth, enddate);

    let job = {username: username, start: startdato, end: slutdato} ;
    jobdata.push(job);
  }
  setItems(jobdata);
} 

function OnButton({ setTemperature, temperature }) {
  return <button onClick={() => setTemperature((temperature += 1))}>+</button>;
}

function OffButton({ setTemperature, temperature }) {
  return <button onClick={() => setTemperature((temperature -= 1))}>-</button>;
}

function ImageHandler({ temperature }) {
  let imageURL;

  if (temperature < 0) {
    imageURL = "./img/snowflake.png";
  } else if (temperature >= 0 && temperature <= 5) {
    imageURL = "./img/medium.png";
  } else {
    imageURL = "./img/sun.png";
  }
  return <img src={imageURL} alt={imageURL} width="200px"></img>;
}

ReactDOM.render(
  <div className="room">
    <Room />
  </div>,
  document.getElementById("root")
);
