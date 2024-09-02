import React from 'react';
import './MovieSlider.style.css'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive}) => {
    return (
        <div className="movie-slider">
            <div className="title">{title}</div>
            <Carousel
                containerClass="carousel-container"
                infinite={true}
                itemClass=""
                renderDotsOutside
                responsive={responsive}
                rewindWithAnimation={false}
                showDots={responsive.mobile !== true ? true : false}
            >
                {movies?.results.map((movie, index) => (
                    <MovieCard movie={movie} key={index}/>
                ))}
            </Carousel>
        </div>
    );
};

export default MovieSlider;