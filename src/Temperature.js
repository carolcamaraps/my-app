import React from "react";

import "./App.css";

export default function Temperature({ temp }) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix">
          <img
            src="./images/sun_clouds.png"
            alt="Cloudy icon"
            className="weather-icon float-left"
          />
          <div className="float-left">
            <span className="temperature">{temp}</span>
            <span className="units">
              <span>°C</span>|<span>°F</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
