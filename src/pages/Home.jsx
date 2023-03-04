import React from 'react';
import Button from '../components/button/Button';
import HeroSlide from '../components/heroSlide/HeroSlide';
import MovieList from '../components/movieList/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';
const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Button to="/movie" size="small" type="outline">
                            View more
                        </Button>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Button to="/movie" size="small" type="outline">
                            View more
                        </Button>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Button to="/tv" size="small" type="outline">
                            View more
                        </Button>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Button to="/tv" size="small" type="outline">
                            View more
                        </Button>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
            </div>
        </>
    );
};

export default Home;
