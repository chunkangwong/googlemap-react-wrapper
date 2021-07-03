import React from "react";
import "./App.css";
import { ManIcon, TruckIcon } from "./assets";
import { GoogleMap } from "./components/GoogleMap";
import VehicleDriverMarker from "./components/VehicleDriverMarker";

const MapLegend = () => {
  return (
    <div className="MapLegend">
      <h1>Legend</h1>
      <div>
        <img src={TruckIcon} alt="Vehicle Icon" /> Vehicle
      </div>
      <div>
        <img src={ManIcon} alt="Driver Icon" /> Driver
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <GoogleMap
        apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
        center={{
          lat: 1.355246,
          lng: 103.948091,
        }}
        zoom={19}
        mapTypeControl={false}
        streetViewControl={false}
      >
        <VehicleDriverMarker
          vehiclePos={{
            lat: 1.355246,
            lng: 103.948091,
          }}
          vehilceNo="AB1234C"
          vehicleType="Truck"
          driverPos={{
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
