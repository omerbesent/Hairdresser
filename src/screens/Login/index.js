import React, { Component } from 'react'
import { SafeAreaView, Text, View ,TouchableOpacity} from 'react-native' 

export default class Login extends Component {
    render() {
        return (
            <View>
                <Text>Login</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}
                    style={{ padding: 20, borderWidth: 1, borderRadius: 10, marginTop: 20 }}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}




