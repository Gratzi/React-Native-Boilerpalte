import React from 'react'
import { Provider, connect } from 'react-redux'
import menuChange from '../actions'
import Main from '../components/Main'

export class MainContainer extends React.Component {
  render() {
    return (
      <Main onMenuChange={(id) => this.props.onMenuChange(id)}/>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    menu: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuChange: (id) => {
      dispatch(menuChange(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
