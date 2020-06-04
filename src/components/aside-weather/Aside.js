import React from "react";
import { useState } from "react";

const Aside = ({ weather }) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      weather(text);
      setText("");
    }
  };
  return (
    <div className="aside--container">
      <input
        onChange={changeHandler}
        onKeyDown={keyPress}
        type="text"
        className="input-field"
        value={text}
        placeholder="city,state,country"
      />
      <div className="icon">An icon</div>
      <div className="temp">
        <h1>12 C</h1>
      </div>
      <div className="date">
        <div className="day">Monday</div>
        <div className="time">16:00</div>
        <span className="border-line"></span>
        <div className="rain">Rain - 30%</div>
        <div className="location">New York, NY, USA</div>
      </div>
    </div>
  );
};

export default Aside;
