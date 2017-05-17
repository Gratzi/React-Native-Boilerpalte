import React from 'react'
import { Provider } from 'react-redux'
import MainContainer from './containers/MainContainer'
import store from "./store";
import { AppRegistry } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  };
}
