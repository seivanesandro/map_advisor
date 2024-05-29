import React, {
    useEffect,
    useState
} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Details from '../details/Details';

import styled from 'styled-components';
//import PropTypes from 'prop-types'

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
`;

const apiURL = process.env.REACT_APP_API_URL_MAIN;
const apiKey = process.env.REACT_APP_API_KEY;

const Main = () => {
    const params = useParams();
    //console.log(params.name);

    const [places, setPlaces] = useState({});

    //funtion get places
    const getPlaces = name => {
        axios
            .get(
                `${apiURL}?name=${name}&apikey=${apiKey}`
            )
            .then(res => setPlaces(res.data))
            .catch(err => console.log(err));
    };
    useEffect(() => {
        getPlaces(params.name);
    }, [params.name]);

    return (
        <ContainerMain className="container-main">
            <Details places={places} />
        </ContainerMain>
    );
};

Main.propTypes = {};

export default Main;
