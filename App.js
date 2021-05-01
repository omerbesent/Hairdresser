import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Config from "react-native-config";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as barberActions from './src/redux/actions/barbers/barberActions';
import * as loginActions from './src/redux/actions/auth/loginActions';
import * as registerActions from './src/redux/actions/auth/registerActions';



class App extends Component {

  componentDidMount() {

    console.log(Config.API_URL);
    console.log(Config.GOOGLE_MAPS_API_KEY);

    let { actions } = this.props;

    actions.getLogin("omer@omer.co", "12345")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <SafeAreaView>
        <Text>LIVE Application</Text>
      </SafeAreaView>
    )
  }
};


const mapStateToProps = state => ({
  barberList: state.barberList.barbers,
  login: state.login.login,
  register: state.register.register
});

const ActionCreators = Object.assign(
  {},
  barberActions,
  loginActions,
  registerActions
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)