import React from "react";
import { Link } from 'react-router-dom';
import '../CSS/MovieCard.css';


const MovieCard = ({ poster, title, id }) => {

  return (
    <Link to={`${id}`} className='movie-cards'>
      <img className="movie-poster" alt={`${title} movie poster`} src={poster}/>
      <h3 className="movie-title">{title}</h3>
    </Link>
  )
}

export default MovieCard;