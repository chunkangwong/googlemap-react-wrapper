import React, { useState } from "react";
import "./App.css";
import GoogleMap from "./components/GoogleMap";

const getCoord = (coordStr) => {
  const [lat, lng] = coordStr.split(",");
  return {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };
};

function App() {
  const [coord, setCoord] = useState("1.354186,103.943812");

  const handleChange = (e) => {
    setCoord(e.target.value);
  };

  return (
    <div className="App" style={{ height: "100vh" }}>
      <input value={coord} onChange={handleChange} />
      <GoogleMap
        apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        center={getCoord(coord)}
        zoom={16}
      >
        <GoogleMap.Marker position={getCoord(coord)} />
      </GoogleMap>
    </div>
  );
}

export default App;
