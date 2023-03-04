import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../button/Button';
import { category as cate } from '../../api/tmdbApi';
const MovieSearch = (props) => {
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const inputRef = useRef();
    const navigate = useNavigate();

    const handleSearch = () => {
        if (keyword.trim().length > 0) {
            navigate(`/${cate[props.category]}/search/${keyword}`);
        }
        inputRef.current.focus();
    };
    useEffect(() => {
        const handleKeyUp = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                handleSearch();
            }
        };
        document.addEventListener('keyup', handleKeyUp);
        return () => document.removeEventListener('keyup', handleKeyUp);
    }, [keyword, props.category]);
    const handleChangeSearch = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <div className="movie-search">
            <Input
                ref={inputRef}
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={handleChangeSearch}
            />
            <Button type="primary" size="small" onClick={handleSearch}>
                Search
            </Button>
        </div>
    );
};

MovieSearch.propTypes = {};

export default MovieSearch;
