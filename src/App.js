import React from "react";
import { useState, useEffect } from "react";
import "./styles/layout.scss";
import Index from "./components/Index";
import Aside from "./components/aside-weather/Aside";
import AsideInput from "./components/aside-weather/AsideInput";

const App = () => {
  const [getWeather, setGetWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(
    (text) => {
      searchWeather(text);
    },
    [getWeather]
  );

  const clientId = "5cbb404866bf40568b1154324200406";

  const searchWeather = async (text) => {
    if (text) {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${clientId}&q=${text}&days=7`
      );

      const responseData = await res.json();
      console.log(responseData);

      return setGetWeather(responseData);
    }

    if (Object.keys(getWeather).length > 1) {
      setLoading(true);
      console.log("the length", Object.keys(getWeather).length);
      console.log("some data!", getWeather.location.lat);
    }

    setLoading(false);
  };

  return (
    <div className="dashboard--container">
      <div className="aside--container">
        <AsideInput Weather={searchWeather} />
        <Aside
          className="aside"
          Weather={searchWeather}
          getWeather={getWeather}
          loading={loading}
        />
      </div>
      <Index
        Weather={searchWeather}
        getWeather={getWeather}
        loading={loading}
      />
    </div>
  );
};

export default App;
