import React from "react";
import { useState } from "react";
import Image from "../../images/sun-clouds.jpg";
import Loading from "../loading/Loading";

const Aside = ({ weather, weatherObj, loading }) => {
  const [text, setText] = useState("");
  const { current, forecast, location } = weatherObj;

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      weather(text);
      setText("");
      // console.log(`${weatherObj[2]}`);
    }
  };

  if (loading) {
    return <Loading />;
  } else {
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
  }
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

export default Aside;
