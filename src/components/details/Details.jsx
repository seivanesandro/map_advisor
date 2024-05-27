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
} from '@mui/material';
import { Place } from '@mui/icons-material';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import TourIcon from '@mui/icons-material/Tour';

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
        <Box
            sx={{
                margin: 5,
                background: '#3300FF'
            }}
        >
            <Stack
                spacing={2}
                justifyContent={'space-between'}
            >
                <Box flex={5}>
                    {/* <Map /> */}
                </Box>
                <Stack
                    direction={'row'}
                    spacing={2}
                    justifyContent={
                        'space-between'
                    }
                >
                    <Box flex={2}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection:
                                    'column',
                                gap: '2rem',
                                padding: '10px',
                                background:
                                    '#3300FF'
                            }}
                        >
                            {info.map(item => {
                                return (
                                    <div
                                        className="container-list"
                                        key={
                                            item.id
                                        }
                                        style={{
                                            padding:
                                                '1px',
                                            display:
                                                'flex',
                                            flexDirection:
                                                'column',
                                            gap: '13rem'
                                        }}
                                    >
                                        <Paper
                                            sx={{
                                                padding:
                                                    '2rem',
                                                background:
                                                    '#CCE5FF',
                                                display:
                                                    'flex',
                                                flexDirection:
                                                    'column',
                                                gap: '1.5rem',
                                                flexWrap:
                                                    ' wrap',
                                                alignContent:
                                                    'center',
                                                alignItems:
                                                    'center'
                                            }}
                                        >
                                            <h4>
                                                <Place />
                                                {
                                                    item
                                                        .properties
                                                        .name
                                                }
                                            </h4>
                                            <h4>
                                                <ArchitectureIcon />{' '}
                                                {
                                                    item
                                                        .properties
                                                        .dist
                                                }
                                                m
                                            </h4>
                                            <h4>
                                                <TourIcon />
                                                {
                                                    item
                                                        .properties
                                                        .kinds
                                                }
                                            </h4>
                                            <h4>
                                                longitude:{' '}
                                                {
                                                    item
                                                        .geometry
                                                        .coordinates[0]
                                                }
                                                ,{' '}
                                                latitude:
                                                {
                                                    item
                                                        .geometry
                                                        .coordinates[1]
                                                }
                                            </h4>
                                        </Paper>
                                    </div>
                                );
                            })}
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

Details.propTypes = {};

export default Details;
