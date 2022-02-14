import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import MovieContainer from './MovieContainer';
import MovieDetails from './MovieDetails';
import URLParams from './URLParams';
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
      .catch(err => this.setState({error: err}))
  }

  showMovieDetails =(id) => {
    const singleMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({movies: singleMovie})
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <Switch>
          <Route exact path="/">
            < MovieContainer movies={this.state.movies}/>
          </Route>
          <Route path="/:id">
            < URLParams/>
          </Route>
        </Switch>
      </main>
    )
  }
}

export default App;
