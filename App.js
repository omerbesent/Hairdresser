import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as barberActions from './src/redux/actions/barbers/barberActions';
import * as loginActions from './src/redux/actions/auth/loginActions';
import * as registerActions from './src/redux/actions/auth/registerActions';

import Router from './src/router'

export default class App extends Component {

  // componentDidMount() {
  //   let { actions } = this.props;

  //   // actions.getLogin("omer@omer.co", "12345")
  //   //   .then(res => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err)
  //   //   })

  //   actions.getBarbers()
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })

  // }

  // render() {
  //   return (
  //     <SafeAreaView>
  //       <Text>LIVE Application</Text>
  //     </SafeAreaView>
  //   )
  // }

  render() {
    return <Router></Router>
  }
};


// const mapStateToProps = state => ({
//   barberList: state.barberList.barbers,
//   login: state.login.login,
//   register: state.register.register
// });

// const ActionCreators = Object.assign(
//   {},
//   barberActions,
//   loginActions,
//   registerActions
// );
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App)