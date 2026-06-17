
"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";


delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationMarker({
    setPosition,
}: {
    setPosition: (position: [number, number]) => void;
}) {
    const [position, setLocalPosition] =
        useState<[number, number] | null>(null);

    useMapEvents({
        click(e) {
            const coords: [number, number] = [
                e.latlng.lat,
                e.latlng.lng,
            ];

            setLocalPosition(coords);
            setPosition(coords);
        },
    });

    return position ? <Marker position={position} /> : null;
}

function SearchControl() {
    const map = useMapEvents({});

    useEffect(() => {
        const provider = new OpenStreetMapProvider();

        const searchControl = new (GeoSearchControl as any)({
            provider,
            style: "bar",
            autoComplete: true,
            autoCompleteDelay: 250,
            showMarker: false,
            showPopup: false,
            retainZoomLevel: false,
            animateZoom: true,
        });

        map.addControl(searchControl);

        return () => {
            map.removeControl(searchControl);
        };
    }, [map]);

    return null;
}

export default function EventLocationMap() {
    const [selectedPosition, setSelectedPosition] =
        useState<[number, number] | null>(null);

    return (
        <div>
            <MapContainer
                center={[10.0159, 76.3419]}
                zoom={12}
                scrollWheelZoom={false}
                className="h-[350px] w-full rounded-2xl"
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SearchControl />
                <LocationMarker setPosition={setSelectedPosition} />
            </MapContainer>

            {selectedPosition && (
                <div className="mt-4 text-white/70">
                    Selected Location:
                    <br />
                    Lat: {selectedPosition[0].toFixed(6)}
                    <br />
                    Lng: {selectedPosition[1].toFixed(6)}
                </div>
            )}
        </div>
    );
}

