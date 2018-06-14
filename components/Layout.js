import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = (props) => (
    <div>
        <Header/>
        <div  className="container mx-auto sm:px-4 pt-6 pb-8">
            {props.children}
        </div>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;