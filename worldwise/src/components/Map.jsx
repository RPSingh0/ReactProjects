import styles from "./Map.module.css";
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";
import {useCities} from "../contexts/CitiesContext.jsx";
import {useGeolocation} from "../hooks/useGeolocation.js";
import Button from "./Button.jsx";
import {useUrlPosition} from "../hooks/useUrlPosition.js";

function Map() {
    const {cities} = useCities();
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const {isLoading: isLoadingPosition, position: geolocationPosition, getPosition} = useGeolocation();

    const [mapLat, mapLng] = useUrlPosition();

    useEffect(function () {
        if (mapLat && mapLng)
            setMapPosition([mapLat, mapLng]);
    }, [mapLat, mapLng]);

    useEffect(function () {
        if (geolocationPosition) {
            setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
        }
    }, [geolocationPosition]);

    return (
        <div className={styles.mapContainer}>
            {!geolocationPosition && (<Button type={'position'} onClick={getPosition}>
                {isLoadingPosition ? 'Loading...' : "Use your position"}
            </Button>)}
            <MapContainer
                center={mapPosition}
                // center={mapLat && mapLng ? [mapLat, mapLng] : mapPosition}
                zoom={13}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map(city => <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
                    <Popup>
                        <span>
                            {city.emoji}
                        </span>
                        <span>
                            {city.cityName}
                        </span>
                    </Popup>
                </Marker>)}
                <ChangeCenter position={mapPosition}/>
                <DetectClick/>
            </MapContainer>
        </div>
    );
}

function ChangeCenter({position}) {
    const map = useMap();
    map.setView(position);

    return null;
}

function DetectClick() {
    const navigate = useNavigate();

    useMapEvents({
        click: (event) => {
            console.log(event);
            navigate(`form?lat=${event.latlng.lat}&lng=${event.latlng.lng}`);
        }
    })
}

export default Map;