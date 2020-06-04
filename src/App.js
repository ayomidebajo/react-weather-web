import React from 'react';
import {useState} from 'react';
import './styles/layout.scss';
import Index  from './components/Index';

const App = () => {
  const [getWeather, setGetWeather] = useState([])

  const clientId = "5cbb404866bf40568b1154324200406";

  const Weather = async (text) => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${clientId}&q=${text}`
    );
    setGetWeather(res)

    console.log(res.url);
  };
  return (
    <div className="App">
     <Index Weather={Weather} getWeather={getWeather}/>
    </div>
  );
}

export default App;
