import React from 'react';
import PropTypes from 'prop-types';
import bg from '../../assets/footer-bg.jpg';
import './pageHeader.scss';
const PageHeader = ({ children }) => {
    return (
        <div className="page-header mb-2" style={{ backgroundImage: `url(${bg})` }}>
            <h2>{children}</h2>
        </div>
    );
};

PageHeader.propTypes = {
    children: PropTypes.string.isRequired,
};

export default PageHeader;
