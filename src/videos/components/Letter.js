import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

function Letter(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onLetterPress(props.letter)}>
      <Text style={styles.letter}>{props.letter}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 50,
    borderColor: '#1185da',
    // borderColor: '#44546b',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#1185da',
    // backgroundColor: '#44546b',
    marginVertical: 10,
  },
  letter: {
    fontSize: 24,
    color: 'white',
  },
});

export default Letter;
