import React, {
    useEffect,
    useState
} from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Box,
    Paper,
    Stack,
    Typography
} from '@mui/material';
import { Place } from '@mui/icons-material';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import TourIcon from '@mui/icons-material/Tour';
import Map from '../map/Map';

const apiURLInfo =
    process.env.REACT_APP_API_URL_INFO;
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
            <Box sx={{ margin: 5 }}>
                <Stack
                    spacing={2}
                    justifyContent={
                        'space-between'
                    }
                >
                    <Box flex={5}>
                        <Map />
                    </Box>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        justifyContent={
                            'space-between'
                        }
                    >
                        <Box flex={2} />
                        <Box
                            flex={5}
                            sx={{
                                background:  'rgb(61,61,61)',gap: 5,
                            }}
                        >
                            {info.map(item => {
                                return (
                                    <>
                                        <Paper
                                            sx={{
                                                padding: 3,
                                                margin: 2,
                                                backgroundColor:
                                                    'rgb(255,255,255)',
                                                    gap: 4,
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                                className="card-item"
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
                                                className="card-item"
                                            >
                                                <ArchitectureIcon />{' '}
                                                <strong>
                                                    Dist:
                                                </strong>
                                                {
                                                    item
                                                        .properties
                                                        .dist
                                                }
                                                m{' '}
                                                <strong>
                                                    {' '}
                                                    Long:
                                                </strong>
                                                {
                                                    item
                                                        .geometry
                                                        .coordinates[0]
                                                }
                                                ,{' '}
                                                <strong>
                                                    Lat:
                                                </strong>
                                                {
                                                    item
                                                        .geometry
                                                        .coordinates[1]
                                                }
                                            </Typography>

                                            <Typography
                                                variante="body2"
                                                component="p"
                                                className="card-item"
                                            >
                                                <TourIcon />{' '}
                                                <strong style={{letterSpacing: '4px'}}>
                                                    {
                                                        item
                                                            .properties
                                                            .kinds
                                                    }
                                                </strong>
                                            </Typography>
                                            {/* <Button
                                                variante="contained"
                                                color="primary"
                                                className="card-btn"
                                                disable={
                                                    true
                                                }
                                            >
                                                Saiba
                                                mais
                                            </Button> */}
                                        </Paper>
                                    </>
                                );
                            })}
                        </Box>
                        <Box flex={2} />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

Details.propTypes = {};

export default Details;
