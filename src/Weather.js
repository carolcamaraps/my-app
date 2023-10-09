import React from "react";

import "./App.css";

export default function Weather({ wind, humidity }) {
  return (
    <ul>
      <li>{wind}</li>
      <li>{humidity}</li>
    </ul>
  );
}
