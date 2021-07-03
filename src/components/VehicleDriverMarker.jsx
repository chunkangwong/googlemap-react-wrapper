import React, { useEffect } from "react";
import { ManIcon, TruckIcon } from "../assets";
import { GoogleMap, useGoogleMap } from "./GoogleMap";

const VehicleMarker = ({ position, vehilceNo, vehicleType }) => {
  return (
    <>
      <GoogleMap.Marker position={position} icon={TruckIcon}>
        <h4>Vehicle# {vehilceNo}</h4>
        <p>Type: {vehicleType}</p>
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

const VehicleDriverMarker = ({
  vehiclePos,
  vehilceNo,
  vehicleType,
  driverPos,
  driverName,
}) => {
  const { map } = useGoogleMap();

  useEffect(() => {
    setTimeout(() => {
      map?.panTo(vehiclePos);
    }, 500);
    setTimeout(() => {
      map?.panTo(driverPos);
    }, 1000);
  }, []);

  return (
    <>
      <VehicleMarker
        position={vehiclePos}
        vehilceNo={vehilceNo}
        vehicleType={vehicleType}
      />
      <DriverMarker position={driverPos} driverName={driverName} />
    </>
  );
};

export default VehicleDriverMarker;
