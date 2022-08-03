import React, { useState } from "react";
//import AddressTextBox from "./components/AddressTextbox";
import Map from "./components/Map";

import { useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "./components/PlacesAutocomplete";

function App() {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useLoadScript({
    //googleMapsApiKey: process.env.GM_API_KEY,
    googleMapsApiKey: process.env.GM_API_KEY,
    libraries: libraries,
  });

  const [selected, setSelected] = useState(null);

  const searchOptions = {
    types: ["(address)"],
    componentRestrictions: { country: "us" },
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="App">
      {" "}
      <div className="AddressContainer">
        <PlacesAutocomplete
          setSelected={setSelected}
          searchOptions={searchOptions}
        />
      </div>
      <div className="MapContainer">
        <Map>{selected && <Marker position={selected} />}</Map>
      </div>
    </div>
  );
}

export default App;
