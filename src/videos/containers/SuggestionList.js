import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../../sections/components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  viewMovie = item => {};
  renderItem = ({item}) => {
    return (
      <Suggestion {...item} onVideoSelected={this.props.onVideoSelected} />
    );
  };
  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
