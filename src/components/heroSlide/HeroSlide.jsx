import React, { useEffect, useState } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import HeroSlideItem from './HeroSlideItem';
import './heroSlide.scss';
import apiConfig from '../../api/apiConfig';
import tmdbApi, { movieType, category } from '../../api/tmdbApi';
import TraninerModal from './TraninerModal';

SwiperCore.use([Autoplay]);

const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(1, 4));
            } catch {
                console.log('error');
            }
        };
        getMovies();
    }, []);
    const setModalActive = async (item) => {
        const modal = document.querySelector(`#modal_${item}`);
        const videos = await tmdbApi.getVideos(category.movie, item);

        if (videos.results.length > 0) {
            const srcVideo = 'http://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal_modal__content__ixdxI > iframe').setAttribute('src', srcVideo);
        } else {
            modal.querySelector('.modal-content').innerHTML = 'NO Trainer';
        }
        modal.classList.toggle('modal_active__COezm');
    };
    return (
        <div className="hero-slide">
            <Swiper slidesPerView={1} spaceBetween={0} grabCursor={true}>
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem
                                className={isActive ? 'active' : ''}
                                item={item}
                                setModalActive={setModalActive}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {movieItems.map((item, i) => (
                <TraninerModal item={item} key={i} />
            ))}
        </div>
    );
};

export default HeroSlide;
