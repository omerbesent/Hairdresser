import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'


class Home extends Component {
  render() {
    return (<SafeAreaView style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Map')}
        style={{ marginTop: 20, padding: 10, borderWidth: 1, borderRadius: 5, borderColor: 'black' }}
      ><Text>Haritaya git</Text></TouchableOpacity>
    </SafeAreaView>)
  }
}


export default Home
