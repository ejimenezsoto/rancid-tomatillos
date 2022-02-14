import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const URLParams = () => {
  const id = useParams().id;
  console.log(id, 'yo')

  return (
    <MovieDetails id={id}/>
  )
}

export default URLParams;