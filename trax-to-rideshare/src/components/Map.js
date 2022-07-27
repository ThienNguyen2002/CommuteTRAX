import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

function Map() {
  const center = useMemo(() => ({ lat: 40.7608, lng: -111.891 }), []);

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="map-container"
      options={{ mapId: "bcdb35cb304e64db" }}
    >
      <Marker position={center} />{" "}
    </GoogleMap>
  );
}

export default Map;
