import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import MoiveCard from '../movieCard/MovieCard';
import './MovieGrid.scss';
import Button from '../button/Button';
import MovieSearch from './MovieSearch';
const MovieGrid = ({ cate }) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            if (keyword === undefined) {
                switch (cate) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(movieType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword,
                };
                response = await tmdbApi.search(cate, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        };
        getList();
    }, [keyword, cate]);
    const handleLoadMore = async () => {
        let response = null;
        const params = {
            page: page + 1,
        };
        if (keyword === undefined) {
            switch (cate) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(movieType.popular, { params });
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };
            response = await tmdbApi.search(cate, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    };

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={cate} keyword={keyword} />
            </div>
            <div className="movie-grid">
                {items.map((item, i) => (
                    <MoiveCard item={item} key={i} category={cate} />
                ))}
            </div>
            {page < totalPage ? (
                <div className="movie-grid__loadmore">
                    <Button type="outline" size="small" onClick={handleLoadMore}>
                        Load More
                    </Button>
                </div>
            ) : null}
        </>
    );
};
MovieGrid.propTypes = {
    cate: PropTypes.string,
};
export default MovieGrid;
