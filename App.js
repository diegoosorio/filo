import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import AppDescription from './src/sections/components/AppDescription';
import SuggestionList from './src/videos/containers/SuggestionList';
import LetterList from './src/videos/containers/LetterList';
import API from './utils/api';
import letterList from './utils/letterList.json';

export default class App extends Component {
  state = {
    suggestionList: [],
    letterList: letterList,
    letterSelected: '',
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    this.setState({
      suggestionList: movies,
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <AppDescription title="Recopilación de señas académicas en el área de filosofía" />
        {/* <Text>buscador</Text> */}
        <LetterList list={this.state.letterList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
