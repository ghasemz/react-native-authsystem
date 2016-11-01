/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Drawer from 'react-native-drawer';
import Button from 'react-native-button';
import Notification from 'react-native-system-notification';
import Login from "./modules/auth/Login.js";

import {Router, routerReducer, Route, Container, Animations, Schema, Actions} from 'react-native-redux-router';


import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import Launch from './modules/Launch.js';
import Home from './modules/Home.js';
import Register from './modules/auth/Register.js';
import CounterReducer from './modules/navbar_reducer';
import VideoPlayer from './modules/Video.js';
import TimeLine from './modules/TimeLine.js';

import {NavBar, NavBarModal} from './modules/NavBar.js';
import {getStoredState, autoRehydrate, createPersistor} from 'redux-persist'
import Icon from 'react-native-vector-icons/FontAwesome';
import LocalizedStrings from 'react-native-localization';
import {
    View, Text, StyleSheet, TouchableHighlight, DrawerLayoutAndroid,
    BackAndroid, TouchableNativeFeedback,
} from  'react-native';

const myIcon = (<Icon name="rocket" size={30} color="#900"/>)

import {
    AppRegistry,
} from 'react-native';

class MenuItemWithIcon extends Component {
    render() {

        var {icon,title,onPress}=this.props;
        return <TouchableNativeFeedback
            delayPressIn={0}
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('#aaa')}>
            <View style={{flex: 1,
            flexDirection: 'row',


            justifyContent: 'flex-end',
            borderBottomColor: '#555',
            borderBottomWidth: 1

            }}>
                <View
                    style={{flex:1,height: 48,
                    paddingLeft:16,
                    paddingTop:8,
                    paddingRight:16
                    }}>
                    <Text style={{
                    color:"white",
                    fontSize:18,
                    fontFamily:"byekan"
                    }}>{title}</Text>
                </View>
                <View
                    style={{
                    width: 64,
                    height: 48,

                    paddingLeft:16,
                    paddingTop:12,
                    paddingRight:16
                    }}>
                    <Icon name={icon} size={24}
                          color="#EEE"/>

                </View>


            </View>
        </TouchableNativeFeedback>
    }
}


var reducers = {
    counter: CounterReducer
};

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
            Actions.home();
            this._drawer.closeDrawer();
//            Notification.create({subject: 'Hey', message: 'Yo! Hello world.', smallIcon: 'ic_stat_rasanak_trans',color:"#CC02FF",category:"event"});
            // Listen to notification-clicking events
            Notification.addListener('press', function (e) {
                console.log(e);
            });

        };

        goToVideo = ()=> {
            this._drawer.closeDrawer();
            // Listen to notification-clicking events
            Actions.video();
        };

        goToRegister = ()=> {
            // Listen to notification-clicking events
            Actions.register();
            this._drawer.closeDrawer();
        };

        goToLogin = ()=> {
            this._drawer.closeDrawer();
            // Listen to notification-clicking events
            Actions.login();
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
                <View style={{flex: 1, backgroundColor: '#333'}}>
                    <View >
                        <Button onPress={this.goToHome}>Go to Home</Button>
                        <Button onPress={this.goToTimeLine}>{this.strings.timeline}{<Icon name="rocket" size={30}
                                                                                          color="#900"/>}</Button>
                        <Button onPress={this.goToVideo}>{this.strings.video}{<Icon name="rocket" size={30}
                                                                                    color="#900"/>}</Button>

                        <MenuItemWithIcon icon="heart" title="منتخب" onPress={this.goToHome}/>
                        <MenuItemWithIcon icon="list" title="کانال ها" onPress={this.goToTimeLine}/>
                        <MenuItemWithIcon icon="cloud-download" title="دانلودها"/>
                        <MenuItemWithIcon icon="user-plus" title="ثبت نام" onPress={this.goToRegister}/>
                        <MenuItemWithIcon icon="sign-in" title="ورود" onPress={this.goToLogin}/>
                        <MenuItemWithIcon icon="sign-out" title="خروج"/>

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
                                <Route name="login" component={Login} initial={true} title="ورود    " schema="default"/>
                                <Route name="home" component={Home} title="Home" schema="default"/>
                                <Route name="register" component={Register} title="ثبت نام" schema="default"/>
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







