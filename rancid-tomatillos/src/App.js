import React, { Component } from 'react'
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

  render() {
    return (
    
      <h1>Hello World</h1>
      )
  }
  
}

export default App;
