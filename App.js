import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import AppDescription from './src/sections/components/AppDescription';
import SuggestionList from './src/videos/containers/SuggestionList';
import LetterList from './src/videos/containers/LetterList';
import API from './utils/api';
import DATA from './utils/data.json';
import letterList from './utils/letterList.json';
import Player from './src/player/contaniners/Player';
import Movie from './src/screens/containers/Movie';

export default class App extends Component {
  state = {
    suggestionList: DATA,
    letterList: letterList,
    letraSeleccionada: '',
    video: {},
    videoSeleccionado: false,
  };
  componentDidMount() {}
  onLetterPress = letra => {
    console.log('letra', letra);
    // this.setState({
    //   letraSeleccionada: e,
    // });
  };
  onVideoSelected = video => {
    console.log(video);
    this.setState({
      video: video,
      videoSeleccionado: true,
    });
  };
  render() {
    console.log(this.state);
    if (this.state.videoSeleccionado) {
      return <Movie video={this.state.video} />;
    }
    return (
      <Home>
        <Header />
        {/* <AppDescription title="Recopilación de señas académicas en el área de filosofía" /> */}
        {/* <Text>buscador</Text> */}
        <LetterList
          list={this.state.letterList}
          onLetterPress={this.onLetterPress}
        />
        <SuggestionList
          list={this.state.suggestionList}
          onVideoSelected={this.onVideoSelected}
        />
      </Home>
    );
  }
}
