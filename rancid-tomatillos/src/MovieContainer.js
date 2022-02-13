import React from "react";
import MovieCard from "./MovieCard";
import './MovieContainer.css';

const MovieContainer = ({ movies, showMovieDetails }) => {
  
  const movieList = movies.map(movie => {
    return (
      <MovieCard 
        poster={movie.poster_path}
        title={movie.title}
        key={movie.id}
        showMovieDetails={showMovieDetails}
      />
    )
  })

  return (
    <section className="movies-container">
      { movieList }
    </section>
  )
}
export default MovieContainer;