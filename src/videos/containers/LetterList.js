import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator';
// import Suggestion from '../components/Suggestion';
import Letter from '../components/Letter';
import Layout from '../components/LetterListLayout';

class LetterList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Letter {...item} onLetterPress={this.props.onLetterPress} />;
  };
  render() {
    return (
      <Layout title="Recopilación de Señas">
        <FlatList
          horizontal
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

export default LetterList;
