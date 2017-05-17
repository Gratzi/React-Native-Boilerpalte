import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MenuTabs extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onPress(1)} underlayColor="white" style={styles.tab}>
          <Text style={styles.text}>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onPress(2)} underlayColor="white" style={styles.tab}>
          <Text style={styles.text}>Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onPress(3)} underlayColor="white" style={styles.tab}>
          <Text style={styles.text}>Wallet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    height: 50,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff'
  },
  tab: {
    flex: 1,
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
    // borderColor: 'black',
    borderWidth: 1
  },
  text: {
    textAlign: 'center',
    lineHeight: 50
  }
});
