import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Config from "react-native-config";



export default class App extends Component {

  componentDidMount() {

    console.log(Config.API_URL);
    console.log(Config.GOOGLE_MAPS_API_KEY);

  }

  render() {
    return (
      <SafeAreaView>
        <Text>dsad</Text>
      </SafeAreaView>
    )
  }
};
