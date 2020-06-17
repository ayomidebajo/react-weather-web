import React from "react";
import { useState, useEffect } from "react";
// import Image from "../../images/sun-clouds.jpg";
import Loading from "../loading/Loading";

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

  // if (Object.keys(weatherObj).length > 1) {
  //   console.log(weatherObj);
  // } else {
  //   console.log("loading...");
  // }

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

      {/* {Object.keys(weatherObj).map((item, i) => {
          <div className="display--container">
            <div className="icon">
              <img src={Image} alt="forecast logo" width="40%" />
            </div>
            <div key={item}>
              <h1 className="temp">12 C</h1>
            </div>
            <div className="date">
              <div className="day">
                Monday, <span className="time">16:00</span>
              </div>
              <div className="mostly">
                ☁️ {weatherObj[item].current.feelslike_c}
              </div>
              <div className="rain">Rain - 30%</div>
              <div className="location">Gbagada, Lagos, Nigeria</div>
            </div>
          </div>;
        })} */}
    </div>
  );
};

// {Object.keys(weather).map((item, i) => (
//   <ul key={i} className="grid-list">
//     <li className="card-container">
//       <div className="card--item">
//         <p className="book-title">{weather[item].location.name}</p>
//         <div className="sub-container">
//           <p>Date published: </p>

//           <p>Author: </p>

//           <button className="btn-details" type="submit">
//             View more details
//           </button>
//         </div>
//       </div>
//     </li>
//   </ul>
// ))}

export default AsideInput;
