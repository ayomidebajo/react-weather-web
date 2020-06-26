import React from "react";

const Today = ({ weatherObj }) => {
  if (Object.keys(weatherObj).length > 1) {
    const { current } = weatherObj;
    return (
      <div className="today--container">
        <div className="card-today"></div>
        <div className="card-today">
          <h4 className="heading-h4">Wind status</h4>
          <div className="wind-speed">
            <p className="speed">{current.wind_kph} <span className="speed-km">km/h</span></p>
            
          </div>
          <div className="wind-dir">
            <div className="location-circle">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <span className="dir">{current.wind_dir}</span>
          </div>
        </div>
        <div className="card-today"></div>
      </div>
    );
  } else {
    return (
      <div className="today--container">
        <div className="card-today"></div>
        <div className="card-today"></div>
        <div className="card-today"></div>
      </div>
    );
  }
};

export default Today;
