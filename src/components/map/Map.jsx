import React, {
    useEffect,
    useState
} from 'react';
import '../../App.css';
import * as tt from '@tomtom-international/web-sdk-maps';

const Map = () => {
    const [map, setMap] = useState({});
    console.log(map)
    const [longitude, setLongitude] =
        useState(-9.4204495);
    const [latitude, setLatitude] =
        useState(38.6968919);

    useEffect(() => {
        var map = tt.map({
            key: 'oWtPW4V2d9nDSoeZvTzrvCtrRMBWH5MG',
            container: 'map',
            center: [longitude, latitude],
            zoom: 20,
        });

        setMap(map);
        const addMarker = () => {
            const element =
                document.createElement('div');
            element.className = 'marker';
            new tt.Marker({
                element: element
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        };

        addMarker();

        return () => map.remove();
    }, [longitude, latitude]);

    return (
        <div className="appAdvisor">
            <div id="map" className='map'/>
            <div className="search-bar">
                <input
                    type="text"
                    id="longitude"
                    placeholder="Longitude"
                    style={{ margin: 5}}
                    onChange={e => {
                        setLongitude(
                            e.target.value
                        );
                    }}
                />
                <input
                    type="text"
                    id="latitude"
                    placeholder="Latitude"
                    style={{ margin: 5 }}
                    onChange={e => {
                        setLatitude(
                            e.target.value
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Map;
