import React, {Component} from 'react';
import YouTube, {YouTubeStandaloneIOS, YouTubeStandaloneAndroid} from 'react-native-youtube';
import {View, Text, StyleSheet} from 'react-native';
import Layout from '../components/Layout';

class Player extends Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    // playerWidth: Dimensions.get('window').width,
  };

  render() {
    return (
      <Layout
        video={
          <YouTube
            apiKey
            videoId={this.props.video.idVideo} // The YouTube video ID
            // play // control playback of video with true/false
            // fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={styles.video}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default Player;
