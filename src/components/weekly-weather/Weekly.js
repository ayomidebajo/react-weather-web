import React from "react";

const Weekly = ({ weatherObj }) => {
  if (Object.keys(weatherObj).length > 1) {
    const { forecast } = weatherObj;

    return (
      <div className="weekly--container">
        {Object.keys(weatherObj.forecast.forecastday).map((item, i) => (
          <div key={i} className="card">
            <div>
              <div className="day-weekly">{forecast.forecastday[item].date.toString()}</div>
              <div className="icon-weekly">
                <img
                  src={forecast.forecastday[item].day.condition.icon}
                  alt="icon"
                  width="20%"
                />
              </div>
              <div className="temp-weekly">
                {forecast.forecastday[item].day.avgtemp_c} C
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    // console.log("no data");
    return <p>loading</p>;
  }
};

{
  /* <div className="weekly--container" key={i}>
          <div className="card">
            <div className="day">{forecast.forecastday.date}</div>
            <div className="icon-weekly">{day.condition.icon}</div>
            <div className="temp-weekly">{day.avgtemp_c}</div>
          </div>
        </div>  */
}

export default Weekly;
