import './MovieDetails.css';
import React, { Component } from 'react'

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
      .then(console.log(this.state))
      .catch(err => this.setState({error: err}));
  }

  render() {
    const movie = this.state.movie;
    return(
      <h1>{movie.title}</h1>
    )
  }
}

export default MovieDetails;