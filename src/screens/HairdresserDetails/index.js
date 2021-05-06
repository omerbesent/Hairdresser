import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

export class HairdresserDetails extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <Text>{this.props.route.params.id}</Text>
        <Text style={{fontSize: 20
          , fontWeight: '700'}}>
          {this.props.route.params.title}
        </Text>
      </SafeAreaView>
    );
  }
}

export default HairdresserDetails;
