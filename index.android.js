/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Drawer from 'react-native-drawer';
import Button from 'react-native-button';
import Notification from 'react-native-system-notification';


import {Router, routerReducer, Route, Container, Animations, Schema, Actions} from 'react-native-redux-router';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import Launch from './modules/Launch.js';
import Home from './modules/Home.js';
import VideoPlayer from './modules/Video.js';
import TimeLine from './modules/TimeLine.js';

import {NavBar, NavBarModal} from './modules/NavBar.js';
import {getStoredState, autoRehydrate, createPersistor} from 'redux-persist'
import Icon from 'react-native-vector-icons/FontAwesome';
import LocalizedStrings from 'react-native-localization';

const myIcon = (<Icon name="rocket" size={30} color="#900"/>)

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

const persistConfig = {whitelist: "test"};


getStoredState(persistConfig, (err, restoredState) => {
    const store = createStore(combineReducers({routerReducer, ...reducers}), restoredState);
    const persistor = createPersistor(store, persistConfig);

    class AwesomeProject extends Component {
        constructor(props) {
            super(props);
            this.strings = new LocalizedStrings({
                en: {
                    video: "Video",
                    timeline: "Timeline",
                    boiledEgg: "Boiled egg",
                    softBoiledEgg: "Soft-boiled egg",
                    choice: "How to choose the egg"
                },
                fa: {
                    video: "ویدیو",
                    timeline: "تایم لاین",
                    boiledEgg: "Uovo sodo",
                    softBoiledEgg: "Uovo alla coque",
                    choice: "Come scegliere l'uovo"
                }
            });
        }

        goToHome = () => {
            this._drawer.closeDrawer();
            Notification.create({subject: 'Hey', message: 'Yo! Hello world.', smallIcon: 'ic_launcher'});
            // Listen to notification-clicking events
            Notification.addListener('press', function (e) {
                console.log(e);
            });
            Actions.home();
        };

        goToVideo = ()=> {
            this._drawer.closeDrawer();
            // Listen to notification-clicking events
            Actions.video();
        };

        goToTimeLine = () => {
            this._drawer.closeDrawer();
            Actions.timeline();
        };

        closeControlPanel = () => {
            this._drawer.close()
        };

        openControlPanel = () => {
            this._drawer.open()
        };

        render() {
            console.log("hamed");
            this.strings.setLanguage('fa');
            var navigationView = (
                <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <View style={{margin: 10}}>
                        <Button onPress={this.goToHome}>Go to Home</Button>
                        <Button onPress={this.goToTimeLine}>{this.strings.timeline}{myIcon}</Button>
                        <Button onPress={this.goToVideo}>{this.strings.video}{myIcon}</Button>
                    </View>
                </View>);

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
                                <Route name="video" component={VideoPlayer} title="Video" schema="default"/>
                                <Route name="timeline" component={TimeLine} title="TimeLine" schema="default"/>
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
            backgroundColor: '#F5FCFF'
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5
        }
    });

    AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
});







