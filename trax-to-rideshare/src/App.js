import React from "react";
import AddressTextBox from "./components/AddressTextbox";
import PricesButton from "./components/PricesButton";
import Map from "./components/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import BarLoader from "react-spinners/BarLoader";
import { ErrorBoundary } from "react-error-boundary";

const render = (status) => {
  // eslint-disable-next-line default-case
  switch (status) {
    case Status.LOADING:
      return <BarLoader />;
    case Status.FAILURE:
      return (
        <ErrorBoundary>
          {" "}
          <Map />{" "}
        </ErrorBoundary>
      );
    case Status.SUCCESS:
      return <Map />;
  }
};

function App() {
  return (
    <div className="App">
      {" "}
      <AddressTextBox />
      <PricesButton />
      <Wrapper apiKey={process.env.GM_API_KEY} render={render}>
        <Map />
      </Wrapper>
      <h1> Hello World!</h1>
    </div>
  );
}

export default App;
