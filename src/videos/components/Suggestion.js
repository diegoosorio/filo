import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Suggestion(props) {
  return (
    <TouchableOpacity onPress={() => props.onVideoSelected(props, true)}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.letra}>{props.letra}</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.title}>{props.nombre}</Text>
          <Text style={styles.origen}>{props.origen}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {
    color: 'white',
    fontSize: 11,
  },
  letra: {
    fontSize: 80,
    color: 'white',
  },
  left: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1185da',
    // backgroundColor: '#44546b',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  origen: {
    // backgroundColor: '#44546b',
    backgroundColor: '#1185da',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Suggestion;
