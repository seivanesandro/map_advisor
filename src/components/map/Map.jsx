import React, {
    useEffect,
    useState
} from 'react';
import '../../App.css';
import * as tt from '@tomtom-international/web-sdk-maps';
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 11rem;

    @media only screen and (${devices.portatil}) {
        gap: 6rem;
    }
    @media only screen and (${devices.tablet}) {
        gap: 6rem;
    }
    @media only screen and (${devices.iphone14}) {
        flex-direction: column;
        gap: 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        flex-direction: column;
        gap: 1rem;
    }
    @media only screen and (${devices.mobileM}) {
        flex-direction: column;
        gap: 1rem;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const MyInput = styled.input`
    text-align: center;
    padding: 0.5rem 3rem;
    border: 0.5px solid #333;
    border-radius: 6px;
    margin: 0.5rem 1rem 0 1rem;

    font-size: 1.5rem;

    color: #32a1ce;
    font-weight: 600;
    outline: none;
    &:hover {
        outline: thick double #32a1ce;
    }
    @media only screen and (${devices.fourk}) {
        font-size: 1.5rem;
    }
    @media only screen and (${devices.tablet}) {
        font-size:0.9rem;
    }

`;

const Map = () => {
    const [map, setMap] = useState({});
    console.log(map);
    const [longitude, setLongitude] =
        useState(-9.4204495);
    const [latitude, setLatitude] =
        useState(38.6968919);

    useEffect(() => {
        var map = tt.map({
            key: 'oWtPW4V2d9nDSoeZvTzrvCtrRMBWH5MG',
            container: 'map',
            center: [longitude, latitude],
            zoom: 14
        });

        setMap(map);

        return () => map.remove();
    }, [longitude, latitude]);

    return (
        <div className="appAdvisor">
            <div id="map" className="map" />
            <SearchBarContainer className="search-bar">
                <MyInput
                    type="text"
                    id="longitude"
                    placeholder="Longitude"
                    style={{ margin: 5 }}
                    onChange={e => {
                        setLongitude(
                            e.target.value
                        );
                    }}
                />
                <MyInput
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
            </SearchBarContainer>
        </div>
    );
};

export default Map;
