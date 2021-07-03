import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const MapContext = createContext(null);

const useMap = () => {
  const { googleMap } = useContext(MapContext);
  const { map, infoWindow } = googleMap;
  return { map, infoWindow };
};

const MapReducer = (state, action) => {
  switch (action.type) {
    case "SET_MAP":
      return {
        ...state,
        map: action.payload,
      };
    case "SET_INFO_WINDOW":
      return {
        ...state,
        infoWindow: action.payload,
      };
    default:
      throw new Error();
  }
};

const GoogleMap = ({ apiKey, children, ...props }) => {
  const [googleMap, mapDispatcher] = useReducer(MapReducer, {
    map: null,
    infoWindow: null,
  });

  console.log("GoogleMap rendered");

  return (
    <MapContext.Provider value={{ googleMap, mapDispatcher }}>
      <Wrapper apiKey={apiKey}>
        <Map {...props} />
        {children}
      </Wrapper>
    </MapContext.Provider>
  );
};

const Map = ({ ...props }) => {
  const mapRef = useRef();
  const { mapDispatcher } = useContext(MapContext);
  const { map } = useMap();

  console.log("Map rendered");

  useEffect(() => {
    const newMap = new window.google.maps.Map(mapRef.current, { ...props });
    mapDispatcher({
      type: "SET_MAP",
      payload: newMap,
    });
  }, []);

  useEffect(() => {
    map?.setOptions({ ...props });
  }, [props]);

  return <div ref={mapRef} style={{ height: "100%" }}></div>;
};

GoogleMap.Marker = function GoogleMapMarker({ children, ...props }) {
  const markerRef = useRef();
  const [marker, setMarker] = useState(null);
  const { map } = useMap();

  console.log("Marker rendered");

  useEffect(() => {
    const newMarker = new window.google.maps.Marker({ map, ...props });
    setMarker(newMarker);
  }, []);

  useEffect(() => {
    marker?.setOptions({ ...props });
  }, [props]);

  return <div ref={markerRef}>{children}</div>;
};

export default GoogleMap;
