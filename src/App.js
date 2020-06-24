import React from "react";
import { useState, useEffect } from "react";
import "./styles/layout.scss";
import Index from "./components/Index";
import Aside from "./components/aside-weather/Aside";
import AsideInput from "./components/aside-weather/AsideInput";

const App = () => {
  const [getWeather, setGetWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");

  useEffect(
    (text) => {
      searchWeather(text);
    },
    [getWeather]
  );

  const locate = (text) => {
    const save = text;
    setLocation(save);
    console.log("text from app", save);
  };

  const clientId = "5cbb404866bf40568b1154324200406";

  //forecast limit is 3 days
  const searchWeather = async (text) => {
    if (text) {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${clientId}&q=${text}&days=3`
      );

      const responseData = await res.json();
      console.log(responseData);

      setGetWeather(responseData);
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
        <AsideInput Weather={searchWeather} locate={locate} />
        <Aside
          className="aside"
          Weather={searchWeather}
          getWeather={getWeather}
          loading={loading}
          locate={location}
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
