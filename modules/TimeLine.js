import {View, Text, StyleSheet, TouchableHighlight,BackAndroid} from  'react-native';
import React, {Component} from 'react';
import Button from 'react-native-button';

import {Actions} from 'react-native-redux-router';


class TimeLine extends React.Component {
    

    render() {

        return (
            <View style={styles.container}>
                <Text>TimeLine</Text>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = TimeLine;