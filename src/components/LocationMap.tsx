import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Navigation, MapPin } from 'lucide-react';

// Fix for default Leaflet marker icons in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Red Icon for Zenith
const zenithIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Coordinates for Nandipara, Khilgaon (Approximate for Demo)
const ZENITH_POS: [number, number] = [23.7562, 90.4485]; 

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function LocationMap() {
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string>("");

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPos([position.coords.latitude, position.coords.longitude]);
        setError("");
      },
      () => {
        setError("Unable to retrieve your location. Please allow access.");
      }
    );
  };

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg z-0">
      <MapContainer center={ZENITH_POS} zoom={15} scrollWheelZoom={false} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Zenith Marker */}
        <Marker position={ZENITH_POS} icon={zenithIcon}>
          <Popup className="font-sans font-bold text-center">
            Zenith Private Care <br /> Nandipara Campus
          </Popup>
        </Marker>

        {/* User Marker */}
        {userPos && (
          <>
            <Marker position={userPos}>
              <Popup>You are here</Popup>
            </Marker>
            {/* Draw Line between User and Zenith */}
            <Polyline positions={[userPos, ZENITH_POS]} color="blue" dashArray="10, 10" />
            <ChangeView center={userPos} zoom={13} />
          </>
        )}
      </MapContainer>

      {/* Floating Action Button */}
      <div className="absolute bottom-4 left-4 z-[400] flex flex-col gap-2">
        <button 
          onClick={handleGetLocation}
          className="bg-brand-gold text-white px-4 py-2 rounded-lg shadow-xl font-bold text-sm flex items-center gap-2 hover:bg-brand-dark transition-colors"
        >
          <Navigation size={16} /> Get Directions
        </button>
        {error && <div className="bg-red-500 text-white text-xs px-3 py-1 rounded shadow">{error}</div>}
      </div>
      
      {/* External Map Link */}
      <div className="absolute bottom-4 right-4 z-[400]">
        <a 
          href={`https://www.google.com/maps/dir/?api=1&destination=${ZENITH_POS[0]},${ZENITH_POS[1]}`}
          target="_blank"
          rel="noreferrer"
          className="bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-100 transition-colors"
        >
          Open in Google Maps <MapPin size={16} />
        </a>
      </div>
    </div>
  );
}