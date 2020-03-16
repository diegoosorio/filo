import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Image,
  View,
  ProgressBarAndroid
} from 'react-native';

function PlayPause(props) {
  return (
    <View style={styles.container}>
      <ProgressBarAndroid
        color="black"
        indeterminate={false}
        styleAttr="Horizontal"
        progress={props.progress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progress: {},
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 5,
    height: 30,
    marginRight: 5,
    marginVertical: 5,
    // backgroundColor: 'yellow',
  },
});

export default PlayPause;
