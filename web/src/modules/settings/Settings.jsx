import 'isomorphic-fetch';
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {
    Button,
    ButtonToolbar,
    Grid,
    Col,
    Row,
    Tab,
    Tabs,
    Table,
    ButtonGroup,
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock,
    Form
} from 'react-bootstrap';
import LocalizedStrings from 'react-localization';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router'
import {push} from 'react-router-redux';


export default class Settings extends React.Component {
    static CHANGE_LANGUGAE = "CHANGE_LANGUGAE";
    static CHANGE_CURRENCY = "CHANGE_CURRENCY";

    static CHANGE_LANG_ACTION = (lang)=> {
        return {
            type: Settings.CHANGE_LANGUGAE,
            payload: {
                lang: lang
            }
        }
    };

    static CHANGE_CURRENCY_ACTION = (currency)=> {
        return {
            type: Settings.CHANGE_CURRENCY,
            payload: {
                currency: currency
            }
        }
    };


    render() {
        return (<div>This is what we were looking for</div>)
    }
}