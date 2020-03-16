import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';
import ProgressBar from '../components/ProgressBar';
import TimeLeft from '../components/TimeLeft';
import FullScreen from '../components/FullScreen';
import MuteSound from '../components/MuteSound';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    mute: false,
    duration: 0.0,
    progress: 0.0,
    currentTime: 0.0,
    timeLeft: 0.0,
  };
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };
  onLoad = data => {
    this.setState({
      loading: false,
      duration: data.duration,
    });
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };
  mutedSound = () => {
    this.setState({
      mute: !this.state.mute,
    });
  };
  onProgress = data => {
    // let currentTime = data.currentTime / 60; //tiempo transcurrido en minutos
    // let minutes = Math.floor(currentTime); //tiempo transcurrido sin decimales
    // let seconds = currentTime % 1;
    // seconds = (seconds * 60) / 1000;
    // let time = (minutes + seconds * 10).toFixed(2); //toFixed(2) 2 decimales
    // let duration = (this.state.duration / 60).toFixed(2); //seekableDuration: duracion de todo el video
    this.setState({
      currentTime: data.currentTime.toFixed(2),
      progress: data.currentTime / this.state.duration,
      timeLeft: (this.state.duration - data.currentTime).toFixed(1),
    });
  };
  onEnd = () => {
    this.setState({
      paused: true,
      progress: 0.0,
    });
    this.player.seek(0);
  };
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            ref={ref => {
              this.player = ref;
            }}
            // source={{
            //   uri:
            //     'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
            // }}
            source={require('../../../utils/videos/broadchurch.mp4')}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            muted={this.state.mute}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <MuteSound onPress={this.mutedSound} mute={this.state.mute} />
            <ProgressBar progress={this.state.progress} />
            <TimeLeft
              timeLeft={this.state.timeLeft}
              duration={this.state.duration}
            />
            <FullScreen />
          </ControlLayout>
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
  },
});

export default Player;
