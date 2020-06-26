import React from "react";
import Moment from "react-moment";
import Image from "../../images/sun-clouds.jpg";

const Aside = ({ getWeather, locate }) => {
  const date = new Date();
  if (Object.keys(getWeather).length > 1) {
    const { current } = getWeather;
    console.log("from aside", locate);

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
              <Moment format="ddd">{date}</Moment>,{" "}
              <span className="time">
                <Moment format="LT">{date}</Moment>
              </span>
            </div>
            <div className="mostly">{current.condition.text}</div>
            <div className="rain">Humidity - {current.humidity}%</div>
            <div className="location">{locate}</div>
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
              <Moment format="ddd">{date}</Moment>,{" "}
              <span className="time">
                <Moment format="LT">{date}</Moment>
              </span>
            </div>
            <div className="mostly">Mostly Cloudy</div>
            <div className="rain">Humidity - 30%</div>
            <div className="location">Gbagada, Lagos, Nigeria</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Aside;
