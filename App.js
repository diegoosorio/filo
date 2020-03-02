import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header'

export default class App extends Component {
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
      </Home>
    );
  }
}
