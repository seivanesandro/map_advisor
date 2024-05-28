import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Main from '../components/main/Main';
//import PropTypes from 'prop-types'

const Pages = props => {
    return (
        <Routes>
            <Route
                path="/"
                and
                element={<Home />}
            />
            <Route
                path="/:name"
                and
                element={<Main />}
            />
        </Routes>
    );
};

Pages.propTypes = {};

export default Pages;
