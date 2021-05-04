import React, { Component } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import FlashMessage from 'react-native-flash-message';

import RegisterForm from '../../Components/RegisterForm';

class Register extends Component {

    render() {
        return <ScrollView style={styles.container}>
            <View style={styles.sub_container}>
                <View style={styles.header_area} >
                    <Text style={styles.header_text1}>Bi Kuaför</Text>
                    <Text style={styles.header_text2}>Kayıt ol</Text>
                </View>

                <View style={styles.form_area} >

                    <RegisterForm></RegisterForm>

                    <View style={styles.login_area}>
                        <Text>Üyeliğiniz var mı ? - </Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Text style={styles.login_text}>Giriş Yapın</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <FlashMessage position="top" duration={4000} />
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    sub_container: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        alignItems: 'center',
        paddingBottom: 20
    },
    header_area: { alignItems: 'center', justifyContent: 'center', paddingVertical: 30 },
    header_text1: { fontWeight: '700', fontSize: 22, paddingTop: 10 },
    header_text2: { fontWeight: '700', fontSize: 16 },
    form_area: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 15, },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    input_icon: {
        position: 'absolute', left: 0, padding: 15, paddingLeft: 12, color: 'gray'
    },
    password_hide_button: { position: 'absolute', right: 0, padding: 15, paddingRight: 12 },
    login_area: { padding: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    login_text: { fontSize: 15, fontWeight: '700' },
    error: {
        color: 'red',
        fontSize: 11
    },
    error_other: {
        width: 130,
        color: 'red',
        fontSize: 11
    }
});

export default Register;