import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './VideoList.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import { useRef } from 'react';
const VideoList = ({ item }) => {
    const [videos, setVideos] = useState([]);
    const { category, id } = useParams();
    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getVideos(category, id);
            setVideos(response.results.slice(0, 5));
        };
        getVideos();
    }, [category, id]);
    console.log(videos);
    return (
        <div className="container">
            <div className="section mb-3">
                <div className="video-list">
                    {videos.map((item) => (
                        <Video item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};
const Video = ({ item }) => {
    const iframeRef = useRef();
    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);
    return (
        <div className="video-item mb-3">
            <div className="video-item__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${item.key}`}
                width="100%"
                title="video"
                frameBorder="0"
            ></iframe>
        </div>
    );
};
VideoList.propTypes = {};

export default VideoList;
