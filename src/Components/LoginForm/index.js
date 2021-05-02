import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../redux/actions/auth/loginActions';

import { useNavigation } from '@react-navigation/native';

const renderEmailInput = ({ input: { onChange, input }, meta: { touched, error }, ...rest },) => {

    return <View>
        <EmailInput onChange={onChange}  {...input} {...rest} />
        {touched && (error && <Text style={styles.error}>{error}</Text>)}
    </View>
};

const renderPasswordInput = ({ input: { onChange, input }, meta: { touched, error }, ...rest }) => {
    return <View>
        <PasswordInput onChange={onChange} {...input} {...rest} />
        {touched && (error && <Text style={styles.error}>{error}</Text>)}
    </View>
};

const LoginForm = (props) => {
    const navigation = useNavigation();

    const { handleSubmit, actions } = props;

    const onSubmit = (values) => {
        actions.getLogin(values.email, values.password)
            .then(res => {
                if (res.status === 200) {
                    if (res.data.success)
                        navigation.navigate('Home');
                    else
                        alert(res.data.message)
                } else {
                    alert(res.data);
                }
            })
            .catch(err => {
                alert(err)
            })
    };

    return (
        <View>
            <View style={{ paddingBottom: 20 }}>
                <Field
                    name={'email'}
                    component={renderEmailInput}
                />
            </View>

            <View style={{ paddingBottom: 20 }}>
                <Field
                    name={'password'}
                    component={renderPasswordInput}
                />
            </View>

            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.forgot_password}>
                    <Text style={styles.forgot_password_text}>Şifremi unuttum?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={styles.login_button}>
                <Text style={styles.login_button_text}>Giriş</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    forgot_password: {},
    forgot_password_text: { color: 'blue', fontWeight: '700' },
    login_button: {
        backgroundColor: 'blue',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderRadius: 10
    },
    login_button_text: { alignItems: 'center', textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 16 },
    error: {
        color: 'red',
        fontSize: 11
    }
});

const validate = (values) => {
    const error = {};

    if (!values.email)
        error.email = '\'E-posta\' boş olmamalıdır';
    if (!values.password)
        error.password = '\'Parola\' boş olmamalıdır';

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        error.email = 'Geçersiz e-posta adresi'

    return error;
};

const mapStateToProps = state => ({
    login: state.login.login
});

const ActionCreators = Object.assign(
    {},
    loginActions
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default reduxForm({
    form: 'login-form',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm))