import {View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid} from  'react-native';
import React, { Component } from 'react';

import Button from 'react-native-button';
import {Actions} from 'react-native-redux-router';


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

class Launch extends React.Component {
    render() {


        return (

                <View style={styles.container}>
                    <Text>Launch page</Text>
                    <Button onPress={Actions.home}>Go to Register page</Button>


                </View>

        );

    }
}


module.exports = Launch;