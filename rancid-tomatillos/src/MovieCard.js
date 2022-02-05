import React from "react";
import './MovieCard.css';


const MovieCard = ({ poster,title }) => {

    return (
        <section className="movie-cards">
            <img className="movie-poster" alt={`${title} poster`} src={poster}/>
            <h3 className="movie-title">{title}</h3>
        </section>
    )
}

export default MovieCard;