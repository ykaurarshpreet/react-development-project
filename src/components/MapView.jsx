import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



// const API_KEY = "at_NRrw5z1AF3Qtq5EE2B72VJnUTc1AH";


function MapView(){ 
  
  const position = [51.505, -0.09] 
  
  return(
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          This is a popup!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;

