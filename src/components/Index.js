import React from "react";
import Weekly from "./weekly-weather/Weekly";
import Today from "./today-highlights/Today";

const Index = ({ Weather, getWeather, loading }) => {
  return (
    <div className="highlights">
      <div className="some">
        <div className="weekly">
          <h2 className="heading-h2">Three day forecast</h2>
          <Weekly weatherObj={getWeather} />
        </div>
        <div className="today">
          <div className="border-line-highlights"></div>
          <h3 className="heading-h3">Today's Highlights</h3>
          <Today weatherObj={getWeather} />
        </div>
      </div>
    </div>
  );
};

export default Index;
