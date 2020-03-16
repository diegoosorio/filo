/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import API from './utils/api';
import Player from './src/player/containers/Player';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <Text>buscador</Text>
          <Text>categorías</Text>
          <CategoryList list={this.state.categoryList} />
          <SuggestionList list={this.state.suggestionList} />
        </Home>
      </Provider>
    );
  }
}
