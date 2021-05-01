import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

export default class Register extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text>Register</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}
                    style={{ padding: 20, borderWidth: 1, borderRadius: 10, marginTop: 20 }}><Text>Logine dön</Text></TouchableOpacity>
            </SafeAreaView>
        )
    }
}

