
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Search from "./Search";
import City from "./City";
import Credits from "./Credits";
import Info from "./Info";
import Temperature from "./Temperature";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Search />
      <City cityName="Rio de Janeiro" />
      <Info time="Last updated: Tuesday 10:30" description="Partly cloudy" />
      <Temperature temp="21" />
      <Weather wind="wind: 6 km/h" humidity="humidty: 73%" />
      <Credits />
    </div>
  );
}

