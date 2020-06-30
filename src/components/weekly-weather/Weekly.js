import React from "react";
import Moment from "react-moment";

const Weekly = ({ weatherObj }) => {
  const { forecast } = weatherObj;
  if (Object.keys(weatherObj).length > 1) {
    return (
      <div className="weekly--container">
        {Object.keys(weatherObj.forecast.forecastday).map((item, i) => (
          <div key={i} className="card">
            <div className="inner--container">
              <div className="weekly-forecast">
                <div className="day-weekly">
                  <Moment format="ddd">
                    {forecast.forecastday[item].date}
                  </Moment>
                </div>
                <div className="icon-weekly">
                  <img
                    src={forecast.forecastday[item].day.condition.icon}
                    alt="icon"
                    width="40px"
                  />
                </div>
                <div className="temp-weekly">
                  {forecast.forecastday[item].day.avgtemp_c} C
                </div>
              </div>
              <div className="divider"></div>
              <div className="other-details">
                <div className="humidity-weekly">
                  <i className="fas fa-tint"></i> humidity -{" "}
                  {forecast.forecastday[item].day.avghumidity}
                </div>
                <div className="rain-weekly">
                  <i className="fas fa-cloud-showers-heavy"></i> Rain -{" "}
                  {forecast.forecastday[item].day.daily_chance_of_rain}%
                </div>
                <div className="uv-index-weekly">
                  <i className="fas fa-sun"></i> UV index -
                  {forecast.forecastday[item].day.uv}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="weekly--container">
        <div className="card">
          <div className="inner--container">
            <div className="weekly-forecast">
              <div className="day-weekly">
                <Moment format="ddd"></Moment>
              </div>
              <div className="icon-weekly">
                <i class="fas fa-cloud-sun"></i>
              </div>
              <div className="temp-weekly">25.5 C</div>
            </div>
            <div className="divider"></div>
            <div className="other-details">
              <div className="humidity-weekly">
                <i className="fas fa-tint"></i> humidity - 70%
              </div>
              <div className="rain-weekly">
                <i className="fas fa-cloud-showers-heavy"></i> Rain - 80%
              </div>
              <div className="uv-index-weekly">
                <i className="fas fa-sun"></i> UV index - 5
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="inner--container">
            <div className="weekly-forecast">
              <div className="day-weekly">
                <Moment format="ddd"></Moment>
              </div>
              <div className="icon-weekly">
                <i class="fas fa-cloud-sun"></i>
              </div>
              <div className="temp-weekly">25.5 C</div>
            </div>
            <div className="divider"></div>
            <div className="other-details">
              <div className="humidity-weekly">
                <i className="fas fa-tint"></i> humidity - 70%
              </div>
              <div className="rain-weekly">
                <i className="fas fa-cloud-showers-heavy"></i> Rain - 80%
              </div>
              <div className="uv-index-weekly">
                <i className="fas fa-sun"></i> UV index - 5
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="inner--container">
            <div className="weekly-forecast">
              <div className="day-weekly">
                <Moment format="ddd"></Moment>
              </div>
              <div className="icon-weekly">
                <i class="fas fa-cloud-sun"></i>
              </div>
              <div className="temp-weekly">25.5 C</div>
            </div>
            <div className="divider"></div>
            <div className="other-details">
              <div className="humidity-weekly">
                <i className="fas fa-tint"></i> humidity - 70%
              </div>
              <div className="rain-weekly">
                <i className="fas fa-cloud-showers-heavy"></i> Rain - 80%
              </div>
              <div className="uv-index-weekly">
                <i className="fas fa-sun"></i> UV index - 5
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Weekly;
