import React from "react";
import Image from "../../images/sun-clouds.jpg";

const Aside = ({ getWeather, loading }) => {
  if (Object.keys(getWeather).length > 1) {
    console.log("the length from aside", Object.keys(getWeather).length);
    console.log("some data! from aside!", getWeather.location.lat);
  }

  if (Object.keys(getWeather).length > 1) {
    const { current, location } = getWeather;
    return (
      <div>
        <div className="display--container">
          <div className="icon">
            <img src={current.condition.icon} alt="forecast logo" width="40%" />
          </div>
          <div>
            <h1 className="temp">{current.temp_c} C</h1>
          </div>
          <div className="date">
            <div className="day">
              Monday, <span className="time">{location.localtime}</span>
            </div>
            <div className="mostly">{current.condition.text}</div>
            <div className="rain">Rain - 30%</div>
            <div className="location">Gbagada, Lagos, Nigeria</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="display--container">
          <div className="icon">
            <img src={Image} alt="forecast logo" width="40%" />
          </div>
          <div>
            <h1 className="temp">27 C</h1>
          </div>
          <div className="date">
            <div className="day">
              Monday, <span className="time">7:00</span>
            </div>
            <div className="mostly">Mostly Cloudy</div>
            <div className="rain">Rain - 30%</div>
            <div className="location">Gbagada, Lagos, Nigeria</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Aside;
