import React from "react";

const Today = ({ weatherObj }) => {
  if (Object.keys(weatherObj).length > 1) {
    const { current } = weatherObj;
    return (
      <div className="today--container">
        <div className="card-today">
          <div className="highlights--container">
            <div className="heading-h4">Feels like</div>
            <i class="fas fa-thermometer-half"></i>
            <div className="current-text">{current.feelslike_c} C</div>
          </div>
        </div>
        <div className="card-today">
          <div className="highlights--container">
            <h4 className="heading-h4">Wind status</h4>
            <div className="wind--container">
              <div className="wind-speed">
                <div className="speed">
                  {current.wind_kph} <span className="speed-km">km/h</span>
                </div>
              </div>
              <div className="wind-dir">
                <div className="location-circle">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <span className="dir">{current.wind_dir}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-today">
          <div className="highlights--container">
            <div className="heading-h4">Pressure</div>
            <i class="fas fa-tachometer-alt"></i>
            <div className="current-text">{current.pressure_in} atm</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="today--container">
        <div className="card-today">
          <div className="highlights--container">
            <div className="heading-h4">Feels like</div>
            <i class="fas fa-thermometer-half"></i>
            <div className="current-text">30 C</div>
          </div>
        </div>
        <div className="card-today">
          <h4 className="heading-h4">Wind status</h4>
          <div className="wind-speed">
            <p className="speed">
              4 <span className="speed-km">km/h</span>
            </p>
          </div>
          <div className="wind-dir">
            <div className="location-circle">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <span className="dir">SWS</span>
          </div>
        </div>

        <div className="card-today">
          <div className="highlights--container">
            <div className="heading-h4">Pressure</div>
            <i class="fas fa-tachometer-alt"></i>
            <div className="current-text">30 atm</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Today;
