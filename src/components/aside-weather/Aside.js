import React from "react";
import AsideInput from "./AsideInput";
import Loading from "../loading/Loading";

const Aside = ({ getWeather, loading }) => {
  if (Object.keys(getWeather).length > 1) {
    console.log("the length from aside", Object.keys(getWeather).length);
    console.log("some data! from aside!", getWeather.location.lat);
  }

  if (Object.keys(getWeather).length > 1) {
    return (
      <div>
        {Object.keys(getWeather).map((item, i) => (
          <div key={item} className="display--container">
            <div className="icon">
              <img
                src={getWeather.current.condition.icon}
                alt="forecast logo"
                width="40%"
              />
            </div>
            <div>
              <h1 className="temp">{getWeather.current.temp_c} C</h1>
            </div>
            <div className="date">
              <div className="day">
                Monday,{" "}
                <span className="time">{getWeather.current.last_updated}</span>
              </div>
              <div className="mostly">{getWeather.location.lat}</div>
              <div className="rain">Rain - 30%</div>
              <div className="location">Gbagada, Lagos, Nigeria</div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>loading</p>;
  }
};

export default Aside;
