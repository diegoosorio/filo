import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function TimeLeft(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.timeLeft}>
        {(props.timeLeft / 60).toFixed(2)} | {(props.duration / 60).toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timeLeft: {
    // color: 'white',
    // fontSize: 10,
    // fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    height: 30,
    paddingHorizontal: 5,
    marginRight: 5,
    marginVertical: 5,
    // backgroundColor: 'yellow',
  },
});

export default TimeLeft;
