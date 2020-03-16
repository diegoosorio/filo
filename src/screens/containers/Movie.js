import React, {Component} from 'react';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/contaniners/Player';
import Header from '../../sections/components/Header';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

class Movie extends Component {
  render() {
    return (
      <MovieLayout>
        <Header />
        <Text style={styles.salir}>X</Text>
        <Player video={this.props.video} />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.nombreContainer}>
              <Text style={styles.nombre}>{this.props.video.nombre}</Text>
            </View>
            <View style={styles.significadoContainer}>
              <Text style={styles.significado}>
                {this.props.video.significado}
              </Text>
              <Text style={styles.origen}>{this.props.video.origen}</Text>
            </View>
          </View>
        </ScrollView>
      </MovieLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#4444',
    borderRadius: 3,
    // backgroundColor: 'gray',
  },
  nombreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 5,
    // backgroundColor: 'yellow',
  },
  nombre: {
    fontSize: 28,
    // backgroundColor: 'yellow',
  },
  significadoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 5,
    // backgroundColor: 'yellow',
  },
  significado: {
    // fontSize: 28,
    marginVertical: 5,
  },
  origen: {
    backgroundColor: '#44546b',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    borderRadius: 5,
    marginVertical: 5,
    fontSize: 11,
  },
  salir: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'right',
    marginRight: 10,
    marginTop: 20,
    fontSize: 24,
  },
});

export default Movie;
