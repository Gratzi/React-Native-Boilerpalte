import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TabButton extends React.Component {
  render(){
    return (
      <Text style={styles.container}>{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    textAlign: 'center',
    lineHeight: 50
  },
});
