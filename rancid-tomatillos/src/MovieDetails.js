import './MovieDetails.css';
import React, { Component } from 'react'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
      error: ''
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(data => data.json())
      .then(data => this.setState({movie: data.movie}))
      .then(err => this.setState({error: err}));
  }

  render() {
    const movie = this.state.movie;
    return()
  }
}

export default MovieDetails;