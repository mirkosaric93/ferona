import { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.setView([45.240694, 19.80957], 13);
    }
  }, []);

  return (
    <MapContainer
      id="map"
      center={[45.240694, 19.80957]}
      zoom={13}
      style={{ width: "500px", height: "60vh" }}
      ref={mapRef}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[45.240694, 19.80957]}>
        <Popup>
          <p>Apartman Ferona</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
