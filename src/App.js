import React from "react";
import "./App.css";
import GoogleMap from "./components/GoogleMap";
import { TruckIcon, ManIcon } from "./assets";

const VehicleMarker = ({ position, carNo, carType }) => {
  return (
    <>
      <GoogleMap.Marker position={position} icon={TruckIcon}>
        <h4>Vehicle# {carNo}</h4>
        <p>Type: {carType}</p>
      </GoogleMap.Marker>
      <GoogleMap.Circle center={position} radius={50} />
    </>
  );
};

const DriverMarker = ({ position, driverName }) => {
  return (
    <GoogleMap.Marker position={position} icon={ManIcon}>
      <h4>Driver: {driverName}</h4>
    </GoogleMap.Marker>
  );
};

const MapLegend = () => {
  const style = {
    backgroundColor: "white",
    marginLeft: "5px",
    padding: "10px",
    border: "1px solid grey",
  };
  return (
    <div style={style}>
      <h1>Legend</h1>
      <div>
        <img src={TruckIcon} /> Vehicle
      </div>
      <div>
        <img src={ManIcon} /> Driver
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <GoogleMap
        apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
        center={{
          lat: 1.355246,
          lng: 103.948091,
        }}
        zoom={16}
        mapTypeControl={false}
        streetViewControl={false}
      >
        <VehicleMarker
          position={{
            lat: 1.355246,
            lng: 103.948091,
          }}
          carNo="AB1234C"
          carType="Truck"
        />
        <DriverMarker
          position={{
            lat: 1.355327,
            lng: 103.948089,
          }}
          driverName="Adam"
        />
        <GoogleMap.Legend controlPosition="LEFT_BOTTOM">
          <MapLegend />
        </GoogleMap.Legend>
      </GoogleMap>
    </div>
  );
};

export default App;
