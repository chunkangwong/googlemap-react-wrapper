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
        <GoogleMap.Marker position={getCoord(coord)} />
        <GoogleMap.Circle
          strokeColor="#FF0000"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#FF0000"
          fillOpacity={0.35}
          center={getCoord(coord)}
          radius={50}
        />
        <GoogleMap.Legend
          controlPosition="LEFT_BOTTOM"
          style={{ background: "white" }}
        >
          <h1>Legend</h1>
          <p>Truck</p>
          <p>Driver</p>
        </GoogleMap.Legend>
      </GoogleMap>
    </div>
  );
}

export default App;
