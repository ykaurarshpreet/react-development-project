import MapView from "./components/MapView";
// import { useState, useEffect } from "react";
// import { useMap } from "./hooks";

const API_KEY = "at_NRrw5z1AF3Qtq5EE2B72VJnUTc1AH";

function App() {


  return(
    
    <div>
   
      <h1>IP Address Tracker</h1>

      <input 
        type="text" 
        placeholder="Search for any IP address or domain"
        // value={inputIp}
        // onChange={(e) => setInputIp(e.target.value)}
        />

      <button>Search</button>
     
      <MapView/>

     <div className="info"> 
      <h3>IP Address</h3> 
      <h3>Location</h3> 
      <h3>Timezone</h3> 
      <h3>ISP</h3> </div>
    
    </div>
  );
}

export default App;







