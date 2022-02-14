import './MovieDetails.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: ''
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(data => data.json())
      .then(data => this.setState({movie: data.movie}))
      .catch(err => this.setState({error: err}));
  }

  displayGenre = () => {
    if(this.state.movie.genres) {
      return this.state.movie.genres.map((genre, index) => {
          return <li key={index}>{genre}, </li>
      })
    }
  }

  render() {
    const movie = this.state.movie;

    return(
      <section className='movie-details'>
        <div className='movie-background'>
          <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
        </div>
        <div className='movie-content'>
          <Link to='/' >
            <button className='back-button'>
              Go Back
            </button>
          </Link>
          <img src={movie.poster_path} alt={`${movie.title} poster`} className='movie-poster' />
          <section className='info'>
            <h3 className='title'>{movie.title}</h3>
            <p className='release-date'>Release Date: {movie.release_date}</p>
            <p className='rating'>Average Rating: {movie.average_rating}</p>
            <ul className='genres'>Genre: <div className='genre-div'>{this.displayGenre()}</div></ul>
            <p className='overview'>Summary: {movie.overview}</p>
            <p className='revenue'>Revenue: ${movie.revenue}</p>
            <p className='runtime'>Runtime: {movie.runtime} minutes</p>
          </section>
        </div>
      </section>
    )
  }
}

export default MovieDetails;