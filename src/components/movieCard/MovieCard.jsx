import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCaretRight } from 'react-icons/ai';
import apiConfig from '../../api/apiConfig';
import './MovieCard.scss';

import { Link } from 'react-router-dom';
const MovieCard = (props) => {
    const item = props.item;
    const link = '/' + props.category + '/' + item.id;
    const background = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${background})` }}>
                <button className="btn">
                    <AiFillCaretRight />
                </button>
            </div>
            <h3>{item.name}</h3>
        </Link>
    );
};

MovieCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MovieCard;
