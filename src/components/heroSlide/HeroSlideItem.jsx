import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import apiConfig from '../../api/apiConfig';
import './heroSlide.scss';
const HeroSlideItem = ({ item, className, setModalActive }) => {
    const navigate = useNavigate();
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
    return (
        <div className={`hero-slide__item ${className}`} style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button type="primary" onClick={() => navigate('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <Button type="outline" onClick={() => setModalActive(item.id)}>
                            Watch Trainer
                        </Button>
                    </div>
                </div>
                <div className="hero-slide__item__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt={item.poster_path} />
                </div>
            </div>
        </div>
    );
};
HeroSlideItem.propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
    setModalActive: PropTypes.func,
};
export default HeroSlideItem;
