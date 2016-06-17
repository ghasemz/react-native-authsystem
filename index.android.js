/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Button from 'react-native-button';

import {Router, routerReducer, Route, Container, Animations, Schema, Actions} from 'react-native-redux-router';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Launch from './Launch.js';
import Home from './Home.js';
import {NavBar, NavBarModal} from './NavBar.js';
import {getStoredState, autoRehydrate, createPersistor} from 'redux-persist'


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid
} from 'react-native';

class ControlPanel extends Component {


    render() {
        return (

            <View style={{backgroundColor: "red"}}>
                <Text>
                    Menu 1
                </Text>


            </View>

        );
    }
}

var reducers = {};

const persistConfig = {whitelist:"test"};


getStoredState(persistConfig, (err, restoredState) => {
    const store = createStore(combineReducers({routerReducer, ...reducers}), restoredState);
    const persistor = createPersistor(store, persistConfig);


    class AwesomeProject extends Component {
        closeControlPanel = () => {
            this._drawer.close()
        };
        openControlPanel = () => {
            this._drawer.open()
        };

        render() {
            console.log("hamed");
            var navigationView = (
                <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <View style={{margin: 10}}><Button onPress={()=> {
                this._drawer.closeDrawer();
                Actions.home();
                }
                }>Go to Register page</Button></View>
                </View>
            );

            return (
                <Provider store={store}>

                    <DrawerLayoutAndroid
                        drawerWidth={250}
                        drawerPosition={DrawerLayoutAndroid.positions.Right}
                        renderNavigationView={() => navigationView}
                        ref={(c) => this._drawer = c}>

                        <View style={{flex:1}}>
                            <View
                                style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
                            <Router>
                                <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal}/>
                                <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>

                                <Schema name="withoutAnimation" navBar={NavBar}/>
                                <Schema name="tab" navBar={NavBar}/>

                                <Route name="launch" component={Launch} initial={true} title="Launch" schema="default"/>
                                <Route name="home" component={Home} title="Home" schema="default"/>
                            </Router>

                        </View>

                    </DrawerLayoutAndroid>
                </Provider>

            );
        }

    }

    const styles = StyleSheet.create({
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

    AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
});







