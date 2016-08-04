import 'whatwg-fetch';

import restful, {fetchBackend} from 'restful.js';
import React from 'react';

import ReactDOM from 'react-dom';
const api = restful('/api/v0.1', fetchBackend(fetch));
const api_go = restful('/api/v0.1-go', fetchBackend(fetch));


import ProgressBar  from 'react-progress-bar-plus';
var Hammer = require('react-hammerjs');
require('react-progress-bar-plus/src/progress-bar.scss');
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
var Menu = require('react-burger-menu').slide;
import {SideNav, Nav} from 'react-sidenav';
//import { PersianNumber } from 'react-persian';
import keydown, {Keys} from 'react-keydown';

import {Button, ButtonToolbar, Grid, Col, Row, Tab, Tabs, Table, ButtonGroup} from 'react-bootstrap';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'

import Footer from 'modules/theme/footer';
import About from "modules/about";
import LocalizedStrings from 'react-localization';
import FontAwesome from 'react-fontawesome';
import {Registration, Login} from 'modules/user/auth';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import Alert from 'react-s-alert';

import Header from 'modules/theme/header';
import Settings from 'modules/settings';

class App extends React.Component {
    static MAIN_MENU_CHANGE_STATE = "MAIN_MENU_CHANGE_STATE";
    static CHANGE_LANGUGAE = "CHANGE_LANGUGAE";

    static GO_TO_PATH_ACTION = (path)=> {
        return (dispatch, getState)=> {
            if (path) {
                dispatch(push(path));
                return
            }
            dispatch(push('/'));
        };
    };


    static  CHANGE_MENU_STATE_ACTION = function (isOpen) {
        return {
            type: App.MAIN_MENU_CHANGE_STATE,
            payload: {
                isOpen: isOpen
            }
        };
    };

    static Alert = (message)=> {
        Alert.error(message, {
            position: 'top-right',
            effect: 'stackslide',
            onShow: function () {
            },
            beep: false,
            timeout: 5000,
            offset: 100
        });
    };

    static Success = (message)=> {
        Alert.success(message, {
            position: 'top-right',
            effect: 'stackslide',
            onShow: function () {
            },
            beep: false,
            timeout: 5000,
            offset: 100
        });
    };


    static Info = (message)=> {
        Alert.info(message, {
            position: 'top-right',
            effect: 'stackslide',
            onShow: function () {
            },
            beep: false,
            timeout: 5000,
            offset: 100
        });
    };

    static Warning = (message)=> {
        Alert.warning(message, {
            position: 'top-right',
            effect: 'stackslide',
            onShow: function () {
            },
            beep: false,
            timeout: 5000,
            offset: 100
        });
    };


    showSettings(event) {
        event.preventDefault();

    }

    getDisplayLang() {
        return this.props.params.lang || this.props.lang;
    }

    constructor(props) {
        super(props);
        this.state = {
            isUpdateEnabled: false,
            percent: -1,
            autoIncrement: false,
            intervalTime: 200
        };

        this.strings = new LocalizedStrings({
            en: {
                home: "Home",
                login: "Login",
                settings: "Login",
                profile: "My Profile"
            },
            fa: {
                home: "خانه",
                login: "لاگین",
                settings: "تنظیمات",
                profile: "پروفایل من"
            }
        });

        console.log(this.props);
        this.strings.setLanguage(this.getDisplayLang());
        this.setNavBar();
    }


    setNavBar() {
        this.state.navi = [
            {id: 'home', icon: 'fa fa-home', text: this.strings.home},
            {id: 'login', icon: 'fa fa-sign-in', text: this.strings.login},
            {id: 'profile', icon: 'fa fa-user', text: this.strings.profile},
            {id: 'settings', icon: 'fa fa-cogs', text: this.strings.settings}
        ];
    }

    componentWillReceiveProps(props) {
        this.strings.setLanguage(this.props.lang);
        /*if (props.params.lang != props.lang){
         props.changeLang(props.params.lang)
         }*/
        this.setNavBar();
    }

    toggleRealTimeUpdate() {
        this.setState({isUpdateEnabled: !this.state.isUpdateEnabled});
    }

    setPercent(percent) {
        this.setState({
            percent: percent
        });
    }

    getChildContext() {
        return {
            setPercent: this.setPercent.bind(this)
        };
    }

    startWithAutoIncrement() {
        this.setState({
            percent: 0,
            autoIncrement: true,
            intervalTime: (Math.random() * 1000)
        });
    }

    handleTap() {
        console.log("tap");
    }

    handleSelection(selection) {
        var path = selection.id;

        if (path == "home") {
            path = ""
        }

        this.props.goToPath("/" + path);
        this.props.changeMenuState(false);
    }

    handleSwipe() {
        console.log("swip");
    }


    render() {
        return (
            <Hammer onTap={this.handleTap} onSwipe={this.handleSwipe}>

                <div className='app'>


                    <main id="page-wrap">
                        <ProgressBar percent={this.state.percent}
                                     autoIncrement={this.state.autoIncrement}
                                     intervalTime={this.state.intervalTime}/>
                        <Header/>
                        {this.props.children}
                        <Alert stack={{limit: 3}}/>
                    </main>
                    <Footer/>
                </div>
            </Hammer>
        )
    }


    static mapStateToProps = (state) => {
        return {
            lang: state.settings.lang,
            registered: state.auth.registered,
            menu: state.app.menu
        }
    };

    static  mapDispatchToProps = (dispatch) => {
        return {
            goToPath: bindActionCreators(App.GO_TO_PATH_ACTION, dispatch),
            changeMenuState: bindActionCreators(App.CHANGE_MENU_STATE_ACTION, dispatch),
            changeLang: bindActionCreators(Settings.CHANGE_LANG_ACTION, dispatch)
        }
    };
}


App.childContextTypes = {
    setPercent: React.PropTypes.func
};

export default connect(App.mapStateToProps,
    App.mapDispatchToProps)(App);