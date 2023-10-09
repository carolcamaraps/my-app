import React from "react";

import "./App.css";

export default function Info({ time, description }) {
  return (
    <ul>
      <li>{time}</li>
      <li>{description}</li>
    </ul>
  );
}
