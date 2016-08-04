/**
 * Created by hmd on 6/11/16.
 */
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
import rest from './rest.jsx';
import 'isomorphic-fetch';
import {browserHistory, Link} from 'react-router'

import {push} from 'react-router-redux';
import App from 'modules/app';


import FormInput from './FormInput.jsx';


class LoginForm extends Component {
    static validate = (values, props) => {
        const strings = new LocalizedStrings({
            en: {
                required: "Required",
                eight: "eight",
                minLength: "Minimum length of {0} is required",
                maxLength: "Maximum is {0} characters",
                sinxteen: "16",
                invalidEmail: "Invalid Email Address",
                invalidMobile: "Invalid Mobile Address"
            },
            fa: {
                required: "الزامیست",
                eight: "هشت",
                minLength: "حداقل طول نام میبیاست {0} کاراکتر باشد",
                maxLength: "طول ورودی بیش از {0} کاراکتر است",
                sixteen: "۱۶",
                invalidEmail: "آدرس ایمیل نادرست است",
                invalidMobile: "شماره موبایل نادرست است"
            }
        });

        strings.setLanguage(props.lang);

        const errors = {};

        if (!values.username) {
            errors.username = strings.required
        } else if (values.username.length < 8) {
            errors.username = strings.formatString(strings.minLength, strings.eight)
        } else if (values.username.length > 16) {
            errors.username = strings.formatString(strings.maxLength, strings.sixteen)
        }

        if (!values.password) {
            errors.password = strings.required
        }


        return errors
    };


    constructor(props) {
        super(props);

        this.strings = new LocalizedStrings({
            en: {
                firstname: "First Name",
                lastname: "Last Name",
                email: "Email",
                submit: "Submit",
                username: "Username",
                password: "Password",
                passwordConfirm: "Reenter Password",
                nameExample: "For Example Jouhn",
                lastNameExample: "ex. Smith",
                mobile: "Mobile",
                mobileExample: "+499128884444",
                emailExample: "ab@gmail.com",
                clear: "Clear"

            },
            fa: {
                firstname: "نام",
                lastname: "نام خانوادگی",
                email: "ایمیل",
                submit: "ارسال",
                username: "نام کاربری",
                password: "کلمه عبور",
                passwordConfirm: "ورود دوباره کلمه عبور",
                nameExample: "مثلا محمد",
                lastNameExample: "مثلا احمدی",
                mobile: "موبایل",
                mobileExample: "+989126136545",
                emailExample: "ee@post.ir",
                clear: "پاک کردن"
            }
        });


        this.strings.setLanguage(props.lang);

    }

    getDisplayLang() {
        return this.props.params.lang || this.props.lang;
    }


    componentWillReceiveProps(nextProps) {
        this.strings.setLanguage(nextProps.lang);
    }


    handleSubmit() {
        this.props.onSubmit2(this.props.values);
    }

    render() {
        const {fields: {username, password}, resetForm, handleSubmit, submitting} = this.props;
        return (
            <Form onSubmit={handleSubmit(this.handleSubmit.bind(this))} horizontal>
                <FormInput title={this.strings.username} field={username} example={""} type="text"/>
                <FormInput title={this.strings.password} field={password} example={this.strings.password}
                           type="password"/>

                <FormGroup>
                    <Col smOffset={2} sm={2}>
                        <Button type="submit">{this.strings.submit}</Button>
                    </Col>
                    <Col sm={2}>
                        <Button type="button" disabled={submitting} onClick={resetForm}>{this.strings.clear}</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}


LoginForm = reduxForm({
    form: 'login',
    fields: ['username', 'password'],
    validate: LoginForm.validate
})(LoginForm);


class LoginState extends Component {

    static CHANGE_LANGUGAE = "CHANGE_LANGUGAE";
    static USER_IS_LOGGEDIN = "USER_IS_LOGGEDIN";
    static USER_IS_LOGGEDOUT = "USER_IS_LOGGEDOUT";

    constructor(props) {
        super(props);
    }

    //Actions
    static  USER_IS_LOGGEDIN_ACTION = function (token) {
        return {
            type: LoginState.USER_IS_LOGGEDIN,
            payload: {
                token: token
            }

        };
    };

    static  USER_IS_LOGGEDOUT_ACTION = function () {
        return {
            type: LoginState.USER_IS_LOGGEDOUT
        };
    };

    static  LOGIN_FORM_SUBMITTED_ACTION = function (form) {
        return (dispatch, getState) => {
            const strings = new LocalizedStrings({
                en: {
                    credentialsAreWrong: "Username or Password is Wrong",
                    welcome: "Welcome"

                },
                fa: {
                    credentialsAreWrong: "نام کاربری یا کلمه عبور اشتباه است",
                    welcome: "خوش آمدید"

                }
            });

            strings.setLanguage(getState().settings.lang);

            fetch('/api/v0.1-go/logins', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }).then(function (resp) {
                if (resp.status != 200) {
                    App.Alert(strings.credentialsAreWrong);
                    return;
                }

                resp.json().then((json) => {
                    App.Success(strings.welcome);
                    dispatch(LoginState.USER_IS_LOGGEDIN_ACTION(json));
                    //console.log('parsed json', json);
                });

            }).catch(function (ex) {
                console.log('parsing failed', ex)
            });
        };
    };


    static  LOGOUT_REQUEST_SUBMITTED_ACTION = function (form) {
        return (dispatch, getState) => {
            const strings = new LocalizedStrings({
                en: {
                    tryAgain: "Try Again",
                    pleaseLogin: "You are not loged in",
                    error: "Unknown Error",
                    existSuccessful: "Exit Successfully"
                },
                fa: {
                    tryAgain: "دوباره تلاش کنید. رخداد خطا",
                    pleaseLogin: "شما وارد نشده اید",
                    error: "خطای نا مشخص",
                    existSuccessful: "شما با موفقیت خارج شدید"
                }
            });
            
            strings.setLanguage(getState().settings.lang);
            if (!getState().auth.token) {
                App.Warning(strings.pleaseLogin);
                return;
            }

            const access_token = getState().auth.token.access_token;

            fetch(`/api/v0.1-go/logins`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                }
            }).then(function (resp) {
                if (resp.status != 200) {
                    App.Alert(strings.tryAgain);
                    return;
                }

                dispatch(LoginState.USER_IS_LOGGEDOUT_ACTION());
                App.Warning(strings.existSuccessful);

            }).catch(function (ex) {
                console.log('parsing failed', ex)
            });
        };
    };

    static GO_TO_LOGIN_ACTION = (fromPath)=> {
        return (dispatch, getState)=> {
            if (!fromPath) {
                dispatch(push('/login'));
                return
            }
            dispatch(push(`/login?fromPath=${fromPath}`));
        };
    };

    //Methods
    formIsSubmitted(form) {
        /*console.log(this.props.routing);
         console.log(this.props.query);*/
        this.props.login(form);
    }

    //Redux Settings, Get States and Map Actions
    static mapStateToProps = (state, ownProps) => {
        return {
            lang: state.settings.lang,
            token: state.auth.token,
            query: ownProps.location.query
        }
    };

    static  mapDispatchToProps = (dispatch) => {
        return {
            login: bindActionCreators(LoginState.LOGIN_FORM_SUBMITTED_ACTION, dispatch),
            goToLogin: bindActionCreators(LoginState.GO_TO_LOGIN_ACTION, dispatch),
            goToPath: bindActionCreators(App.GO_TO_PATH_ACTION, dispatch),
            logout: bindActionCreators(LoginState.LOGOUT_REQUEST_SUBMITTED_ACTION, dispatch)
        }
    };


    render() {

        const username = this.props.token ? this.props.token.username : "";
        console.log("is here");


        const loginForm = (
            <Grid>
                <Row>
                    <h1>{username}</h1>
                </Row>

                <Row>
                    <Col xs={12} md={8}>
                        <LoginForm onSubmit2={this.formIsSubmitted.bind(this)}
                                   lang={this.props.lang}></LoginForm>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <Button onClick={this.logoutHandler.bind(this)}> Logout </Button>
                    </Col>
                </Row>

            </Grid>
        );


        return loginForm;
    }

    componentDidMount() {

    }

    logoutHandler() {
        this.props.logout();


    }
}

export default connect(LoginState.mapStateToProps,
    LoginState.mapDispatchToProps)(LoginState);