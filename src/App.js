import React from "react";
// import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/layout.scss";
import Index from "./components/Index";

const App = () => {
  const [getWeather, setGetWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Uselayout has been called!");

    searchWeather();
  }, []);
  const clientId = "5cbb404866bf40568b1154324200406";

  const searchWeather = async (text) => {
    if (text) {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${clientId}&q=${text}&days=7`
      );

      const responseData = await res.json();
        console.log(responseData);
        setLoading(true)

      return setGetWeather(responseData);
    }
  
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
