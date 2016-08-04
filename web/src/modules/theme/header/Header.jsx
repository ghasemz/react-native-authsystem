/**
 * Created by hmd on 6/22/16.
 */

import 'isomorphic-fetch';
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import { Button, ButtonToolbar, Grid, Col, Row, Tab, Tabs, Table, ButtonGroup,ControlLabel,FormControl,FormGroup,HelpBlock,Form} from 'react-bootstrap';
import LocalizedStrings from 'react-localization';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router'
import { push } from 'react-router-redux';

import {Login} from 'modules/user/auth';
import Settings from 'modules/settings';


class Header extends React.Component {

    changeLangHandler(lang) {
        return (()=> {
            this.props.changeLang(lang);
        }).bind(this)
    }

    currencyChangeHandler(cur) {
        return (()=> {
            this.props.changeCurrency(cur);
        }).bind(this)
    }

    render() {
        return (
            <header>
                <Grid fluid={true}>
                   
                </Grid>

            </header>);
    }

    static mapStateToProps = (state) => {
        return {
            lang: state.settings.lang,
            settings: state.settings,
            registered: state.auth.registered,
            auth: state.auth
        }
    };

    static  mapDispatchToProps = (dispatch) => {
        return {
            logout: bindActionCreators(Login.LOGOUT_REQUEST_SUBMITTED_ACTION, dispatch),
            changeLang: bindActionCreators(Settings.CHANGE_LANG_ACTION, dispatch),
            changeCurrency: bindActionCreators(Settings.CHANGE_CURRENCY_ACTION, dispatch)
        }
    };
}

export default connect(Header.mapStateToProps,
    Header.mapDispatchToProps)(Header);
