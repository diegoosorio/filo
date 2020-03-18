import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : '#eaeaea',
        },
      ]}>
      <Text>{props.text}</Text>
      <Text>Seleccione una letra de la lista</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    // height: 200,
    // backgroundColor: 'yellow',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default VerticalSeparator;
