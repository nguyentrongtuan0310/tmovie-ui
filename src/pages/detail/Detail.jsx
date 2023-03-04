import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss';
import Button from '../../components/button/Button';
import CastList from '../../components/castList/CastList';
import VideoList from '../../components/videoList/VideoList';
import MovieList from '../../components/movieList/MovieList';
const Detail = () => {
    const [item, setItem] = useState({});
    const { category, id } = useParams();

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        };
        getDetail();
    }, [category, id]);
    console.log(item);
    return (
        <>
            {item && (
                <div
                    className="banner "
                    style={{
                        backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`,
                    }}
                ></div>
            )}
            <div className="movie-content mb-3">
                <div className="movie-content__poster">
                    <div
                        className="movie-content__poster__img"
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`,
                        }}
                    ></div>
                </div>
                <div className="movie-content__info">
                    <h1 className="title">{item.title || item.name}</h1>
                    <div className="genres ">
                        {item.genres &&
                            item.genres.slice(0, 5).map((genre) => (
                                <span key={genre.id} className="genres__item">
                                    {genre.name}
                                </span>
                            ))}
                    </div>
                    <p>{item.overview}</p>
                    <div className="cast">
                        <div className="cast_title">
                            <h2>Casts</h2>
                        </div>
                        <CastList />
                    </div>
                </div>
            </div>
            <VideoList />
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2>Simlar</h2>
                </div>
                <MovieList category={category} type="similar" id={id} />
            </div>
        </>
    );
};

export default Detail;
