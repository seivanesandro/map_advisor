import React, {
    useEffect,
    useState
} from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Paper,
    Typography
} from '@mui/material';
import { Place } from '@mui/icons-material';
import Map from '../map/Map';
import styled from 'styled-components';
import {devices} from '../../utils/constantes'

const ContainerDetails = styled.div`
    background: #3300ff;
`;
const MainDetails = styled.div`
`;

const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    padding: 1rem 58rem;

    @media only screen and (${devices.fourk}) {
        padding: 74px 34rem;
    }
    @media only screen and (${devices.portatilL}) {
        padding: 74px 10rem;
    }
    @media only screen and (${devices.portatil}) {
        padding: 74px 5rem;
    }
    @media only screen and (${devices.tablet}) {
        padding: 74px 5rem;
    }
    @media only screen and (${devices.iphone14}) {
        padding: 74px 0;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 74px 0;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 74px 0;
    }
    @media only screen and (${devices.mobileP}) {
        padding: 74px 0;
    }
`;

const apiURLInfo = process.env.REACT_APP_API_URL_INFO;
const apiKey = process.env.REACT_APP_API_KEY;

const Details = ({ places }) => {
    const params = useParams();
    console.log(places);

    const longitude = places.lon;
    const latitude = places.lat;
    const [info, setInfo] = useState([]);

    //function get details
    const getInfo = name => {
        axios
            .get(
                `${apiURLInfo}?name=${name}&radius=5000&lon=${longitude}&lat=${latitude}&apikey=${apiKey}`
            )
            .then(res =>
                setInfo(res.data.features)
            )
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getInfo(params.name);
    });

    //console.log(info);
    return (
        <>
            <ContainerDetails className="container-Details">
                <MainDetails className="main-Details">
                    <div className='container-map'>
                        <Map />
                    </div>
                    <ContainerItems className='container-items'>
                        {info.map(item => {
                            return (
                                <>
                                    <Paper
                                        className="paper-style"
                                        elevation={
                                            2
                                        }
                                        sx={{
                                            padding: 4,
                                            margin: 2,
                                            textAlign:
                                                {
                                                    xs: 'start',
                                                    sm: 'start',
                                                    md: 'center',
                                                    lg: 'center',
                                                    xl: 'center'
                                                }
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            className="item"
                                            sx={{
                                                marginBottom:
                                                    '0.5rem',
                                                fontSize:
                                                    {
                                                        xs: '1.1rem',
                                                        sm: '1.2rem',
                                                        md: '1.3rem',
                                                        lg: '1.4rem',
                                                        xl: '1.5rem'
                                                    }
                                            }}
                                        >
                                            <Place />{' '}
                                            {
                                                item
                                                    .properties
                                                    .name
                                            }
                                        </Typography>
                                        <Typography
                                            variante="body2"
                                            component="p"
                                            className="item"
                                            sx={{
                                                marginBottom:
                                                    '0.5rem'
                                            }}
                                        >
                                            <strong>
                                                Distance:{' '}
                                            </strong>
                                            {
                                                item
                                                    .properties
                                                    .dist
                                            }
                                            m{' '}
                                        </Typography>
                                        <Typography
                                            variante="body2"
                                            component="p"
                                            className="item"
                                            sx={{
                                                marginBottom:
                                                    '0.5rem'
                                            }}
                                        >
                                            <strong>
                                                Longitude:{' '}
                                            </strong>
                                            {
                                                item
                                                    .geometry
                                                    .coordinates[0]
                                            }
                                        </Typography>
                                        <Typography
                                            variante="body2"
                                            component="p"
                                            className="item"
                                            sx={{
                                                marginBottom:
                                                    '0.5rem'
                                            }}
                                        >
                                            <strong>
                                                Latitude:{' '}
                                            </strong>
                                            {
                                                item
                                                    .geometry
                                                    .coordinates[1]
                                            }
                                        </Typography>
                                    </Paper>
                                </>
                            );
                        })}
                    </ContainerItems>
                </MainDetails>
            </ContainerDetails>
        </>
    );
};

Details.propTypes = {};

export default Details;
