import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";

// preiau cheia privata
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// coordonatele locatiei
const centerCoords = {
  lat: 44.489082,
  lng: 26.043053,
};
// stilizarea containerului pt a functiona
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
// optiuni extra 🢣 stilizari harta
const options = {
  styles: null, // nu adaug asa ceva acum..
  disableDefaultUI: true,
  streetViewControl: false,
  zoomControl: true,
  // ...de cautat alte optiuni
};

const Map = () => {
  //folosesc hook-ul asigurat de Google pt cazul in care am eroare sau se incarca
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  // stare pt a arata sau nu fereastra de Info pe Marker
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onMarkerClickHandler = () => {
    setShowInfoWindow(true);
  };
  const onCloseInfoWindow = () => {
    setShowInfoWindow(false);
  };

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading Maps</p>;

  return (
    // <div className="map-container">
    <GoogleMap
      // {/* componenta speciala pt a randa harta */}
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={centerCoords}
      options={options}
    >
      <Marker position={centerCoords} onClick={onMarkerClickHandler} />
      {showInfoWindow ? (
        <InfoWindow
          position={centerCoords}
          // options={{ pixelOffset: { height: -20 } }}
          onCloseClick={onCloseInfoWindow}
        >
          <div>
            {/* <h3>Location:</h3> */}
            <h3>Ciresoasa Street 102</h3>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
    // </div>
  );
};

export default Map;
