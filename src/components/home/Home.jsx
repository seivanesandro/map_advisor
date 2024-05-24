import React from 'react';
//import PropTypes from 'prop-types'
import {
    styled,
    alpha
} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import {
    AppBar,
    Box,
    Toolbar
} from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    margin: ' 1rem 0 1rem 0',
    borderRadius: '16px',
    backgroundColor: alpha(
        theme.palette.common.white,
        0.15
    ),
    '&:hover': {
        backgroundColor: alpha(
            theme.palette.common.white,
            0.25
        )
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
    }
}));

const SearchIconWrapper = styled('div')(
    ({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
);

const StyledInputBase = styled(InputBase)(
    ({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition:
                theme.transitions.create('width'),
            [theme.breakpoints.up('sm', 'md')]: {
                width: '60ch',
                '&:focus': {
                    width: '70ch'
                }
            }
        }
    })
);

const MyButton = styled(Button)({
    background: '#fff',
    color: '#333',
    borderRadius: 18,
    padding: '0.5rem 3rem',
    marginTop: '1rem !important',

    '&:hover': {
        backgroundColor: alpha('#fff', 0.95),
        outline: 'thick double #CCE5FF'
    }
});

const Home = props => {
    return (
        <div className="Container Home">
            <header className="container-header">
                <div className="hero">
                    <div className="hero-banner">
                        <h4 className="hero-title">
                            Travel advisor
                        </h4>
                        <p className="hero-description">
                            "The Journey of a
                            thousand miles begins
                            with a single step"
                        </p>
                        <Box
                            sx={{
                                flexGrow: 1,
                                color: 'transparent',
                                flexDirection:
                                    'row'
                            }}
                        >
                            <AppBar
                                position="static"
                                sx={{
                                    bgcolor:
                                        'transparent'
                                }}
                                elevation={0}
                            >
                                <Toolbar
                                    sx={{
                                        justifyContent:
                                            'center'
                                    }}
                                >
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{
                                                'aria-label':
                                                    'search'
                                            }}
                                        />
                                    </Search>
                                </Toolbar>
                            </AppBar>
                            <MyButton
                                variant="contained"
                                startIcon={
                                    <SearchIcon />
                                }
                                color={'primary'}
                            >
                                Contained
                            </MyButton>
                        </Box>
                    </div>
                </div>
            </header>
        </div>
    );
};

Home.propTypes = {};

export default Home;
