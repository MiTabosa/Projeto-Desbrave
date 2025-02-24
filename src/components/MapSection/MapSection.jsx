import { useEffect } from "react";

const MapSection = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=SUA_API_KEY&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
    };

    window.initMap = () => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -8.0476, lng: -34.877 },
        zoom: 12,
      });
    };

    loadGoogleMaps();
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapSection;
