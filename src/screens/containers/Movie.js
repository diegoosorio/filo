import React, {Component} from 'react';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/contaniners/Player';
import Header from '../../sections/components/Header';

class Movie extends Component {
  render() {
    return (
      <MovieLayout>
        <Header />
        <Player video={this.props.video} />
      </MovieLayout>
    );
  }
}

export default Movie;
