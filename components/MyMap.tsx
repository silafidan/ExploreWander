"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";



type MyMapProps = {
    center: [number, number];
    zoom?: number;
    imageUrl?: string;
    title?: string;

};


const MyMap = ({ center, zoom = 13, imageUrl, title }: MyMapProps) => {

    const customIcon = new Icon({
        iconUrl: imageUrl || "/default-hotel-icon.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
        className: "",
    })
    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%', borderRadius: '8px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center} icon={customIcon}>
                <Popup>
                    <div style={{ textAlign: 'center' }}>
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt={title || 'Otel'}
                                className='popup-image'
                                style={{
                                    width: '100px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    marginBottom: '5px',

                                }}
                            />
                        )}
                        <p style={{ fontWeight: 'bold', margin: 0 }}>{title || 'Hotel Location'}</p>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MyMap;
