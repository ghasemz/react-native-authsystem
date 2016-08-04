/**
 * Created by hmd on 6/11/16.
 */
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import { Button, ButtonToolbar, Grid, Col, Row, Tab, Tabs, Table, ButtonGroup,ControlLabel,FormControl,FormGroup,HelpBlock,Form} from 'react-bootstrap';
import LocalizedStrings from 'react-localization';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import rest from './rest.jsx';
import 'isomorphic-fetch';
import { browserHistory } from 'react-router'
import { push } from 'react-router-redux';


export default class FormInput extends Component {
    render() {
        const {field,example,title} = this.props;

        return (
            <FormGroup validationState={field.touched && field.error && "error" || field.touched &&  "success" || null}>
                <Col xs={12} md={2}>
                    <ControlLabel>{title}</ControlLabel>

                </Col>
                <Col xs={12} md={8}>
                    <FormControl
                        type={this.props.type}
                        placeholder={title}

                        {...field}
                        />
                    {field.touched && field.error && <div>{field.error}</div>}
                </Col>
                <Col xs={12} md={2}>
                    <HelpBlock>{example}</HelpBlock>
                </Col>
            </FormGroup>
        )
    }
}
