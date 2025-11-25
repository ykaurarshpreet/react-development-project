import { useEffect, useState } from "react";
import "./App.css";
import MapView from "./components/MapView";

const API_KEY = "at_NRrw5z1AF3Qtq5EE2B72VJnUTc1AH"

function App() {
  const[ipData, setIpData] = useState(null)

  async function fetchInitialData(){
    try {

      //grabbing current ip add
      const ipFetch = await fetch(`https://api.ipify.org?format=json`)
      const ipJson = await ipFetch.json()
      console.log(ipJson);

      //then were putting in the current api key
      const currentIpFetch = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipJson.ip}`)

      console.log(currentIpFetch)
      setIpData(currentIpFetchJson)

    } catch (error) {
      console.error(error);

    }
  }
  useEffect(() => {
    fetchInitialData()
  },[])


  return (
    <>
      <MapView ipData={ipData}/>
    </>
  );
}

export default App;
