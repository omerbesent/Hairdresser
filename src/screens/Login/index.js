import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginForm from '../../Components/LoginForm';

export default class Login extends Component {

    render() {
        return <ScrollView style={styles.container}>
            <View style={styles.sub_container}>
                <View style={styles.header_area} >
                    <Icon name={"map-marked-alt"} size={40}  ></Icon>
                    <Text style={styles.header_text1}>Bi Kuaför</Text>
                    <Text style={styles.header_text2}>Kuaför Randevu Uygulamasına Hoşgeldiniz</Text>
                </View>

                <View style={styles.form_area} >

                    <LoginForm ></LoginForm>

                    <View style={styles.register_area}>
                        <Text>Üyeliğiniz yok mu ? - </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Register')} >
                            <Text style={styles.register_text}>Kayıt Olun</Text>
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
        paddingVertical: 50,
        alignItems: 'center'
    },
    header_area: { alignItems: 'center', justifyContent: 'center', paddingVertical: 30 },
    header_text1: { fontWeight: '700', fontSize: 22, paddingTop: 10 },
    header_text2: { fontWeight: '700', fontSize: 16 },
    form_area: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        marginTop: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 15, },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    register_area: { padding: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    register_text: { fontSize: 15, fontWeight: '700' }
});




