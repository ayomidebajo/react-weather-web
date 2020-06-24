import React from "react";
import Moment from 'react-moment';


const Weekly = ({ weatherObj }) => {
  const { forecast } = weatherObj;
  if (Object.keys(weatherObj).length > 1) {
   
    
    return (
      <div className="weekly--container">
        {Object.keys(weatherObj.forecast.forecastday).map((item, i) => (
          <div key={i} className="card">
            <div>
              <div className="day-weekly">
              <Moment format="ddd">
              {forecast.forecastday[item].date}
            </Moment>
              </div>
              <div className="icon-weekly">
                <img
                  src={forecast.forecastday[item].day.condition.icon}
                  alt="icon"
                  width="25%"
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

{/* <Moment parse="ddd dddd">
                {forecast.forecastday[item].date}
             </Moment> */}

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
