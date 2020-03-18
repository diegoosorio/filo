import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import LetterList from './src/videos/containers/LetterList';
// import API from './utils/api';
import DATA from './utils/data.json';
import letterList from './utils/letterList.json';
// import Player from './src/player/contaniners/Player';
import Movie from './src/screens/containers/Movie';

export default class App extends Component {
  state = {
    // suggestionList: DATA,
    data: DATA,
    listaSeleccionada: [],
    letterList: letterList,
    letraSeleccionada: '',
    video: {},
    videoSeleccionado: false,
  };
  componentDidMount() {}
  onLetterPress = letra => {
    let listaSeleccionada = this.state.data.filter(
      item => item.letra === letra,
    );
    this.setState({
      letraSeleccionada: letra,
      listaSeleccionada: listaSeleccionada,
    });
  };
  onVideoSelected = (video, videoSeleccionado) => {
    this.setState({
      video: video,
      videoSeleccionado: videoSeleccionado,
    });
  };
  render() {
    if (this.state.videoSeleccionado) {
      return (
        <Movie
          video={this.state.video}
          onLetterPress={this.onLetterPress}
          onVideoSelected={this.onVideoSelected}
        />
      );
    }
    return (
      <Home>
        <Header />
        <LetterList
          list={this.state.letterList}
          onLetterPress={this.onLetterPress}
        />
        <SuggestionList
          list={this.state.listaSeleccionada}
          onVideoSelected={this.onVideoSelected}
        />
      </Home>
    );
  }
}
