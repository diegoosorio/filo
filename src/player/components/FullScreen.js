import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

function FullScreen(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
      // underlayColor="red"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}>
      <Image
        style={styles.button}
        source={require('../../../utils/images/expand.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 5,
    height: 30,
    marginRight: 5,
    marginVertical: 5,
    // backgroundColor: 'yellow',
  },
});

export default FullScreen;
