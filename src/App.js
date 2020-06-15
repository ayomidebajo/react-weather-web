import React from "react";
import { useState, useEffect } from "react";
import "./styles/layout.scss";
import Index from "./components/Index";

const App = () => {
  const [getWeather, setGetWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    (text) => {
      searchWeather(text);
    },
    [getWeather]
  );

  const clientId = "5cbb404866bf40568b1154324200406";

  const searchWeather = async (text) => {
    setLoading(true);
    if (text) {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${clientId}&q=${text}&days=7`
      );

      const responseData = await res.json();
      console.log(responseData);

      return setGetWeather(responseData);
    }
    console.log("some data!", getWeather);
    setLoading(false);
  };

  return (
    <div className="App">
      <Index
        Weather={searchWeather}
        getWeather={getWeather}
        loading={loading}
      />
    </div>
  );
};

export default App;
