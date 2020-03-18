import React, {Component} from 'react';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/contaniners/Player';
import Header from '../../sections/components/Header';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Movie extends Component {
  render() {
    return (
      <MovieLayout>
        <Header>
          <TouchableOpacity onPress={() => this.props.onVideoSelected({}, false)}>
            <Text style={styles.salir}>X</Text>
          </TouchableOpacity>
        </Header>
        <Player style={styles.player} video={this.props.video} />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.nombreContainer}>
              <Text style={styles.nombre}>{this.props.video.nombre}</Text>
            </View>
            <View style={styles.definicionContainer}>
              <Text style={styles.tituloDefinicion}>Definición: </Text>
              <Text style={styles.definicion}>
                {this.props.video.definicion}
              </Text>
              <Text style={styles.origen}>{this.props.video.origen}</Text>
            </View>
            <View style={styles.ejemploContainer}>
              <Text style={styles.tituloEjemplo}>Ejemplo: </Text>
              <Text style={styles.ejemplo}>{this.props.video.ejemplo}</Text>
            </View>
            <View style={styles.descripcionContainer}>
              <Text style={styles.tituloDescripcion}>
                Descripción Lexicográfica:
              </Text>
              <Text style={styles.ejemplo}>{this.props.video.descripcion}</Text>
            </View>
          </View>
        </ScrollView>
      </MovieLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 15,
    // borderWidth: 1,
    // borderColor: '#4444',
    // borderRadius: 3,
    // backgroundColor: 'gray',
  },
  nombreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    // marginVertical: 5,
    backgroundColor: '#1185da',
  },
  nombre: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    // backgroundColor: 'yellow',
  },
  definicionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    // marginBottom: 5,
    // backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'rgba(17, 133, 218, 0.3)',
    // borderRadius: 3,
    // backgroundColor: 'gray',
  },
  tituloDefinicion: {
    fontSize: 18,
    // textAlign: 'right',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4c4c4c',
    // backgroundColor: 'green',
  },
  definicion: {
    marginBottom: 5,
    textAlign: 'justify',
    fontSize: 15,
    color: '#4c4c4c',
    // backgroundColor: 'green',
  },
  origen: {
    alignSelf: 'flex-end',
    backgroundColor: '#44546b',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    borderRadius: 5,
    fontSize: 11,
  },
  ejemploContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    // marginBottom: 5,
    borderWidth: 1,
    borderColor: 'rgba(17, 133, 218, 0.3)',
    borderTopWidth: 0,
    // backgroundColor: 'yellow',
  },
  tituloEjemplo: {
    fontSize: 18,
    // textAlign: 'right',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4c4c4c',
    // backgroundColor: 'green',
  },
  ejemplo: {
    marginBottom: 5,
    textAlign: 'justify',
    fontSize: 15,
    color: '#4c4c4c',
    // backgroundColor: 'green',
  },
  descripcionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'rgba(17, 133, 218, 0.3)',
    borderTopWidth: 0,
    // backgroundColor: 'yellow',
  },
  tituloDescripcion: {
    fontSize: 18,
    // textAlign: 'right',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4c4c4c',
    // backgroundColor: 'green',
  },
  descripcion: {
    marginBottom: 5,
    textAlign: 'justify',
    fontSize: 15,
    color: '#4c4c4c',
    // backgroundColor: 'green',
  },
  salir: {
    fontSize: 24,
    // alignSelf: 'flex-end'
  },
});

export default Movie;
