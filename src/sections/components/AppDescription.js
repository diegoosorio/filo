import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppDescription = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    fontSize: 30,
  },
  text: {
    fontSize: 18,
  },
});

export default AppDescription;
