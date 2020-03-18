import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo_filoseñando_2.jpg')}
            style={styles.logo}
          />
          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 70,
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    // backgroundColor: 'white',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // fontSize: '18',
  },
});

export default Header;
