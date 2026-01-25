 import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const shops = [
        { name: "Shop 1", lat: 10.8505, lng: 76.2711 },
        { name: "Shop 2", lat: 11.2588, lng: 75.7804 },
    ];

export default function Footer() {
    

    return (
        <MapContainer center={[10.95, 76.0]} zoom={7} scrollWheelZoom={false} className="h-64 w-full rounded-xl">
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution="© OpenStreetMap © CARTO"
            />

            {shops.map((shop, i) => (
                <Marker key={i} position={[shop.lat, shop.lng]}>
                    <Popup>{shop.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};
