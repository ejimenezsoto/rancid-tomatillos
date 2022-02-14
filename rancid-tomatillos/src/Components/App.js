import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import MovieContainer from './MovieContainer';
import SearchBar from './SearchBar';
import URLParams from './URLParams';
import '../CSS/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      error: '',
    }
  }

  componentDidMount = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(data => {
        this.setState({movies: data.movies})
        this.setState({filteredMovies: data.movies})
        })
      .catch(err => this.setState({error: err}))
  }

  searchMovies = (searchQuery) => {
    const filteredMovies = this.state.filteredMovies.filter(movie => {
      const lowerCaseMovie = movie.title.toLowerCase()
      return lowerCaseMovie.includes(searchQuery)
    })
    this.setState({movies: filteredMovies})
    
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <>
          {this.state.error ? 
          <h1>Something went wrong, try again later</h1> : 
          <Switch>
            <Route exact path="/">
              <SearchBar searchMovies={this.searchMovies}/>
              < MovieContainer movies={this.state.movies}/>
            </Route>
            <Route path="/:id">
              < URLParams/>
            </Route>
          </Switch>}
        </>
      </main>
    )
  }
}

export default App;
