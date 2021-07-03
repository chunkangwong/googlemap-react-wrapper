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
        mapTypeControl={false}
        streetViewControl={false}
      >
        <GoogleMap.Marker position={getCoord(coord)}>
          <h1>Title</h1>
          <p>Hello world</p>
        </GoogleMap.Marker>
      </GoogleMap>
    </div>
  );
}

export default App;
