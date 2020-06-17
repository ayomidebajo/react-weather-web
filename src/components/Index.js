import React from "react";
// import Aside from "./aside-weather/Aside";
import Weekly from "./weekly-weather/Weekly";
import Today from "./today-highlights/Today";

const Index = ({ Weather, getWeather, loading }) => {
  console.log(getWeather);

  return (
    <div className="">
      {/* <div className="aside">
        <Aside weather={Weather} weatherObj={getWeather} loading={loading} />
      </div> */}
      <div className="some">
        <div className="weekly">
          <Weekly />
        </div>
        <div className="today">
          <Today weatherObj={getWeather} />
        </div>
      </div>
    </div>
  );
};

export default Index;
