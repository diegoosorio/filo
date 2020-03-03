import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';

class SuggestionList extends Component {
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'Pokemon',
        key: '2',
      },
      {
        title: 'Pokemon',
        key: '3',
      },
    ];
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
