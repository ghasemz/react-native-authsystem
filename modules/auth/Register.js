import {View, Text, StyleSheet, TouchableHighlight, TextInput, BackAndroid} from  'react-native';
var tcomb = require('tcomb-form-native');
import React, {Component} from 'react';
import Button from 'react-native-button';
import {Actions} from 'react-native-redux-router';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import * as Animatable from 'react-native-animatable';
//import SmartScrollView from 'react-native-smart-scroll-view';


var I18n = require('react-native-i18n');

var Demo = React.createClass({
    render: function () {
        return (
            <Text>{I18n.t('greeting')}</Text>
        )
    }
});

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
    en: {
        greeting: 'Hi!'
    },
    fr: {
        greeting: 'Bonjour!'
    }
};

var Form = tcomb.form.Form;
var Gender = tcomb.enums({
    M: 'مرد',
    F: 'زن',
    NA: 'مشخص نشده است'
});

var Positive = tcomb.refinement(tcomb.Number, function (n) {
    return n >= 0;
});


// here we are: define your domain model
var Person = tcomb.struct({

    username: tcomb.String,              // a required string
    password: tcomb.String,              // a required string
    gender: Gender,
    firstname: tcomb.String,              // a required string
    mobile: tcomb.Number,
    lastname: tcomb.String,  // an optional string
    email: tcomb.String,
    birth: tcomb.Date,
});


var options = {
    fields: {
        username: {
            placeholder: 'نام کاربری',
            label: 'نام کاربری',
            error: 'نام کاربری معتبر نیست'
        }, password: {
            placeholder: 'گذرواژه',
            label: 'گذرواژه',
            error: 'گذرواژه معتبر نیست'
        }, firstname: {
            placeholder: 'نام',
            label: 'نام',
            help: 'مثلا حامد',
            error: 'نام معتبر نیست'
        }, lastname: {
            placeholder: 'نام خانوادگی',
            label: 'نام خانوادگی',
            help: 'مثلا محمدی',
            error: 'نام خانوادگی معتبر نیست'
        }, email: {
            placeholder: 'you@server.com',
            label: 'ایمیل',
            error: 'آین آدرس معتبر نیست',
        }, mobile: {
            help: '09126136545 یا 989126136545',
            placeholder: '09126136545',
            label: 'شماره موبایل',
            error: 'این شماره معتبر نیست',
        }, birth: {
            placeholder: 'you@server.com',
            label: 'تاریخ تولد',
            error: 'تاریخ تولد نادرست است'
        }, gender: {
            placeholder: 'you@server.com',
            label: 'آقا یا خانم؟',
            error: 'جنسیت انتخاب نشده است'
        }
    }
};

/*<TextInput
 style={{height: 40, borderColor: 'gray', borderWidth: 1}}
 onChangeText={(text) => this.setState({text:text})}
 value={this.state.text}
 />*/

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            forceFocusField: undefined,
            value: {},
            text: "hames"
        });


    }

    onChange(value) {
        this.setState({value: value});
    }

    onPress() {

        let hostAddress = "api.rasanak.com";
        if (__DEV__) {
            console.log(this.state.value);
            hostAddress = "localhost:8080";
        }

        fetch(`http://${hostAddress}/api/v0.1/accounts/origin/users?lang=${"fa"}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.value)
        }).then(function (json) {
            if (json.status != 201) {
                console.log('parsed json', json);
                return;
            }

        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });


    }


    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>

                    <Demo/>
                        <Form
                            ref="form"
                            type={Person}
                            options={options}
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                        />

                        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)}
                                            underlayColor='#99d9f4'>
                            <Text style={styles.buttonText}>ثبت نام</Text>
                        </TouchableHighlight>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

var styles = StyleSheet.create({
    contentContainerStyle: {
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1
    },
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
        flex: 1,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#CC02FF',
        borderColor: '#CC02FF',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});


module.exports = Register;