import React, {Component} from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

class Confirmation extends Component {
    static CONFIRMATION_ACCEPTED = "CONFIRMATION_ACCEPTED";


    constructor(props) {
        super(props);

        props.putConfirm("confirmations", props.params.confid, {
            validated: true
        })
    }

    static  CONFIRMATION_ACCEPTED_ACTION = function (confirmation) {
        return {
            type: this.CONFIRMATION_ACCEPTED,
            payload: {
                confirmation: confirmation
            }
        };
    };

    static  PUT_CONFIRMATION_ACTION = function (entity, id, confirmation) {
        return (dispatch, getState) => {
            const key = entity + "_" + id;
            const strings = new LocalizedStrings({
                en: {
                    tryAgain: "Try Again"

                },
                fa: {
                    tryAgain: " دوباره تلاش کن"
                }
            });

            strings.setLanguage(getState().settings.lang);

            fetch(`/api/v0.1-go/${entity}/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(confirmation)
            }).then(function (resp) {

                if (resp.status != 200) {
                    //App.Warning(strings.tryAgain);
                    //if (cb) cb("was not successful");
                    return;
                }

                //if (cb) cb(null);

                resp.json().then((json) => {
                    console.log(json);
                    dispatch(Confirmation.CONFIRMATION_ACCEPTED_ACTION(json));
                });


            }).catch(function (ex) {
                //if (cb) cb(ex);
                console.log('parsing failed', ex)
            });
        };
        /*return {
         type: USER_REGISTRATION_FORM_SUBMITTED,
         form: form
         };*/
    };

    render() {
        console.log(this.props.confirmation);
        return (
            <Grid>
                <Col xs={12} md={8}>
                    {
                        ((props) => {
                            if (props.confirmation) {
                                return <div>
                                    Your {props.confirmation.cat}:{props.confirmation.object} is Confirmed
                                    , know you are able to login to your profile.</div>
                            }

                        })(this.props)
                    }
                    <ul>
                        <li>
                            <Link to={`/${this.props.lang}/settings`}>Go to Profile</Link>
                        </li>
                        <li>
                            <Link to={`/${this.props.lang}/i/10`}>Go to Market Watch</Link>
                        </li>
                        <li>
                            <Link to={`/${this.props.lang}/login`}>Login</Link>
                        </li>
                    </ul>
                </Col>
            </Grid>
        )
    }

    static mapStateToProps = (state) => {
        return {
            lang: state.settings.lang,
            confirmation: state.auth.confirmation,
        }
    };

    static  mapDispatchToProps = (dispatch) => {
        return {
            putConfirm: bindActionCreators(Confirmation.PUT_CONFIRMATION_ACTION, dispatch)
        }
    };
}


export default connect(Confirmation.mapStateToProps,
    Confirmation.mapDispatchToProps)(Confirmation);