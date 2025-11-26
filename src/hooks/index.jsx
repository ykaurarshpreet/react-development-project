import { useState} from "react";

export const useMap = (API_KEY) => {
    const [position, setPosition] = useState({
        lat: 51.505, 
        lng: -0.09,
    });


    async function fetchIpLocation(ip){
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
    
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        setPosition({
            lat: result.location.lat,
            lng: result.location.lng,
        });
        console.log(result);
    } catch (error) {
        console.error(error.message);
        
    }
}

    return {position, fetchIpLocation};
};



