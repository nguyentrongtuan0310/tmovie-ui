import React from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import { useParams } from 'react-router-dom';
import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movieGrid/MovieGrid';
const Catalog = () => {
    const { category } = useParams();

    return (
        <>
            <PageHeader>{category === cate.movie ? 'Movies' : ' TV Series'}</PageHeader>
            <div className="contaner">
                <div className="section mb-3">
                    <MovieGrid cate={category === cate.movie ? cate.movie : cate.tv} />
                </div>
            </div>
        </>
    );
};

export default Catalog;
