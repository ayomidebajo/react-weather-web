import React from "react";
import Aside from "./aside-weather/Aside";
import Weekly from "./weekly-weather/Weekly";
import Today from "./today-highlights/Today";

const Index = ({ Weather, getWeather, loading }) => {


  return (
    <div className="dashboard--container">
      <div className="aside">
        <Aside weather={Weather} weatherObj={getWeather} loading={loading}/>
      </div>
      <div className="some">
      <div className="weekly">
        <Weekly />
      </div>
      <div className="today">
        <Today />
      </div>
      </div>
    </div>
  );
};

export default Index;
