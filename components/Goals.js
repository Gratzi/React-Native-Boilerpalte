import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatList from 'react-native/Libraries/CustomComponents/Lists/FlatList';
import listData from './listData';

export default class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <View>
        <Text label="Goals">GOALS</Text>
        <FlatList
          data={listData}
          renderItem={this.renderItem}
         />
      </View>
    );
  }

  renderItem({ item, index }) {
    return <Text style={styles.row}>{item.title}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    color: 'black',
    fontSize: 20
  }
});
