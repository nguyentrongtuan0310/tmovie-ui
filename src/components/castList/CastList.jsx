import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastList = () => {
    const [casts, setCasts] = useState([]);
    const { category, id } = useParams();
    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, id);
            setCasts(response.cast.slice(0, 5));
        };
        getCredits();
    }, [category, id]);

    return (
        <div className="casts">
            {casts.map((cast) => (
                <div className="casts-item" key={cast.id}>
                    <div
                        className="casts-item__img"
                        style={{
                            backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`,
                        }}
                    ></div>
                    <p className="casts-item__name">{cast.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CastList;
