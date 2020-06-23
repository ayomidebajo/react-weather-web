import React from "react";
import { useState, useEffect } from "react";
// import Loading from "../loading/Loading";

const AsideInput = ({ Weather, loading }) => {
  const [text, setText] = useState("gbagada,lagos,nigeria");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const keyPressHandler = async (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      Weather(text);
      setText("");
    }
  };

  return (
    <div className="">
      <input
        onKeyDown={keyPressHandler}
        onChange={changeHandler}
        type="text"
        className="input-field"
        value={text}
        placeholder="city,state,country"
      />
    </div>
  );
};

export default AsideInput;
