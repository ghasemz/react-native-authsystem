import {View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid,
    BackAndroid,TouchableNativeFeedback} from  'react-native';
import React, {Component} from 'react';

import Button from 'react-native-button';
import {Actions, Router} from 'react-native-redux-router';


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

BackAndroid.addEventListener('hardwareBackPress', function () {
    /*if (!this.onMainScreen()) {
     this.goBack();*/

    if (Router.props.routes.length > 1) {
        Actions.pop();
        return true;
    }
    return false;
});

class Launch extends React.Component {


    render() {


        return (

            <View style={styles.container}>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>

                <Text>Launch page</Text>
                <Button onPress={Actions.home}>Go to Register page</Button>


            </View>

        );

    }
}


module.exports = Launch;