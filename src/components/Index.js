import React from "react";
import Weekly from "./weekly-weather/Weekly";
import Today from "./today-highlights/Today";

const Index = ({ Weather, getWeather, loading }) => {
  console.log(getWeather);

  return (
    <div className="">
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
