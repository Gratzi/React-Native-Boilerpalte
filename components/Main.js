// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import MenuTabs from './MenuTabs'
import Goals from './Goals'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          horizontal={true}
          loop={false}
          showsPagination={false}
          index={0}
          ref='viewSwiper'>
          <Goals />
          <View style={styles.adviceView}>
            <Text label="Advice">ADVICE</Text>
          </View>
          <View style={styles.walletView}>
            <Text label="Wallet">WALLET</Text>
          </View>
        </Swiper>
        <MenuTabs onPress={this._swipeView}/>
      </View>
    );
  }
  _swipeView = (i) => {
    //   JSON.stringify(this.refs));
    this.props.onMenuChange(i);
    this.refs.viewSwiper.scrollBy(i);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adviceView: {
    flex: 1,
    backgroundColor: '#112233',
    justifyContent: 'center',
    alignItems: 'center'
  },
  walletView: {
    flex: 1,
    backgroundColor: '#009988',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
