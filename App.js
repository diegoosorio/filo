/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import API from './utils/api';
// import Video from 'react-native-video';
import YouTube from 'react-native-youtube';

export default class App extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    // const movies = await API.getSuggestion(10);
    // const categories = await API.getMovies();
    // console.log(movies);
    // console.log(categories);
    // this.setState({
    //   suggestionList: movies,
    //   categoryList: categories,
    // });
  }
  render() {
    return (
      <Home>
        <Header />
        {/* <Text>Recopilación de señas académicas en el área de filosofia</Text> */}
        {/* <Video source={{uri: 'https://www.youtube.com/watch?v=r-2NQzZWsaY'}} /> */}
        <YouTube
          videoId="r-2NQzZWsaY" // The YouTube video ID
          // play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => this.setState({isReady: true})}
          onChangeState={e => this.setState({status: e.state})}
          onChangeQuality={e => this.setState({quality: e.quality})}
          onError={e => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
