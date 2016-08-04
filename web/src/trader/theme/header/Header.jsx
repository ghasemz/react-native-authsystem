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

import {Login} from 'trader/user/auth';
import Settings from 'trader/settings';


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
                    <Row>
                        <Col  xl={4} smOffset={4} sm={2} xsOffset={4} xs={4}>
                            <h3></h3>
                            <ButtonGroup>
                                <Button onClick={this.currencyChangeHandler("USD")}
                                        active={this.props.settings.currency == "USD"}>دلار</Button>
                                <Button onClick={this.currencyChangeHandler("IRR")}
                                        active={this.props.settings.currency == "IRR"}>
                                    ریال</Button>
                            </ButtonGroup>
                            
                        </Col>

                        <Col xl={4} sm={2} xs={4}>
                            <h3></h3>
                            <ButtonGroup>
                                <Button onClick={this.changeLangHandler("fa")}
                                        active={this.props.lang == "fa"}>فا </Button>
                                <Button onClick={this.changeLangHandler("en")} active={this.props.lang == "en"}>
                                    En </Button>
                            </ButtonGroup>

                        </Col>


                    </Row>
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
