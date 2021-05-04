import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from '../../redux/actions/auth/registerActions';

import { successMessage, errorMessage } from '../CustomMessage/index';


const rendershortInput = ({ input: { onChange, input }, meta: { touched, error }, ...rest }) => {
    return <View>
        <TextInput
            style={styles.form_input_other} onChange={onChange} {...input} {...rest} />
        {touched && (error && <Text style={styles.error}>{error}</Text>)}
    </View>
};

const renderInput = ({ input: { onChange, input }, meta: { touched, error }, ...rest }) => {
    return <View>
        <TextInput
            style={styles.form_input} onChange={onChange} {...input} {...rest} />
        {touched && (error && <Text style={styles.error}>{error}</Text>)}
    </View>
};

const RegisterForm = (props) => {
    const { handleSubmit, actions } = props;

    const onSubmit = (values) => {
        actions.getRegister(values.email, values.password, values.firstName, values.lastName, values.phoneNumber)
            .then(res => {
                if (res.status === 200) {
                    if (res.data.success)
                        successMessage("Kayıt işlemi", res.data.message);
                    else
                        errorMessage('Kayıt işlemi', res.data.message);
                } else {
                    errorMessage('Kayıt işlemi', res.data);
                }
            })
            .catch(err => {
                errorMessage('Kayıt işlemi', err);
            })
    };

    return (
        <View>
            <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Field
                        name={'firstName'}
                        props={{
                            placeholder: 'Adı'
                        }}
                        component={rendershortInput}
                    />
                    <Field
                        name={'lastName'}
                        props={{
                            placeholder: 'Soyadı'
                        }}
                        component={rendershortInput}
                    />
                </View>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Field
                    name={'phoneNumber'}
                    props={{
                        placeholder: 'Telefon'
                    }}
                    component={renderInput}
                />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Field
                    name={'email'}
                    props={{
                        placeholder: 'E-posta'
                    }}
                    component={renderInput}
                />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Field
                    name={'password'}
                    props={{
                        placeholder: 'Parola',
                        secureTextEntry: true
                    }}
                    component={renderInput}
                />
            </View >

            <View style={{ marginBottom: 20 }}>
                <Field
                    name={'confirmPassword'}
                    props={{
                        placeholder: 'Parola Tekrar',
                        secureTextEntry: true
                    }}
                    component={renderInput}
                />
            </View>

            <TouchableOpacity
                // disabled={!isValid}
                onPress={handleSubmit(onSubmit)}
                style={styles.register_button}>
                <Text style={styles.register_button_text}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    form_input: {
        width: 280,
        borderWidth: 1,
        borderRadius: 7,
        padding: 8,
        borderColor: 'gray'
    },
    form_input_other: {
        width: 135,
        borderWidth: 1,
        borderRadius: 7,
        padding: 8,
        borderColor: 'gray'
    },
    register_button: {
        backgroundColor: 'blue',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderRadius: 10
    },
    register_button_text: { alignItems: 'center', textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 16 },
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

const validate = (values) => {
    const error = {};

    if (!values.firstName)
        error.firstName = '\'Adı\' boş olmamalıdır';
    if (!values.lastName)
        error.lastName = '\'Soyadı\' boş olmamalıdır';
    if (!values.phoneNumber)
        error.phoneNumber = '\'Telefon\' boş olmamalıdır';
    if (!values.email)
        error.email = '\'E-posta\' boş olmamalıdır';
    if (!values.password)
        error.password = '\'Parola\' boş olmamalıdır';
    if (!values.confirmPassword)
        error.confirmPassword = '\'Parola Tekrar\' boş olmamalıdır';

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        error.email = 'Geçersiz e-posta adresi'

    if (values.password !== values.confirmPassword) {
        error.password = '\'Parola\' ve \'Parola Tekrar\' alanları uyuşmamaktadır';
        confirmPassword = '\'Parola\' ve \'Parola Tekrar\' alanları uyuşmamaktadır';
    }

    return error;
};

const mapStateToProps = state => ({
    register: state.register.register
});

const ActionCreators = Object.assign(
    {},
    registerActions
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default reduxForm({
    form: 'register-form',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(RegisterForm))