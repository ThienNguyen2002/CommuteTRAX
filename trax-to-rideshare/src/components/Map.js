import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

var currentPrice = 0;
//Name, lat, lng, scaledWidth, scaledHeight, price
const markers = [
  [
    "Old Bingham Hwy",
    40.58656608198297,
    -111.9950785441254,
    currentPrice.toString(),
  ],
];

function Map() {
  const center = useMemo(() => ({ lat: 40.7608, lng: -111.891 }), []);

  return (
    <GoogleMap
      zoom={11.5}
      center={center}
      mapContainerClassName="map-container"
      options={{
        mapId: "bcdb35cb304e64db",
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
      }}
    >
      {markers.map((marker) => (
        <Marker
          key={marker[0]}
          position={{ lat: marker[1], lng: marker[2] }}
          title={marker[0] + " " + marker[3]}
        />
      ))}
    </GoogleMap>
  );
}

export default Map;
