import React, { Component } from 'react'
import MovieContainer from './MovieContainer';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      error: '',
    }
  }

  componentDidMount = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.setState({error: error}))
  }

  showMovieDetails =(id) => {
    const singleMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({movies: singleMovie})
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        < MovieContainer movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
