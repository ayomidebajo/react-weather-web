import React from "react";

const Today = ({ weatherObj }) => {
  if (Object.keys(weatherObj).length > 1) {
    console.log(weatherObj);
  } else {
    console.log("loading...");
  }

  return (
    <div className="today--container">
      <div className="card-today"></div>
      <div className="card-today"></div>
      <div className="card-today"></div>
      <div className="card-today"></div>
      <div className="card-today"></div>
      <div className="card-today"></div>
    </div>
  );
};

export default Today;
