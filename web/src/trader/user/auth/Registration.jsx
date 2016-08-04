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
import {browserHistory} from 'react-router'
import {push} from 'react-router-redux';
import FormInput from './FormInput.jsx';
import Login from './Login.jsx';
import Alert from 'react-s-alert';


class RegistrationSuccessful extends Component {
    render() {
        return (
            <Grid>
                <Col xs={12} md={2}>
                    <div>Registration was successful</div>
                    <Button onClick={this.props.goToLogin}>Login</Button>
                </Col>
            </Grid>
        )
    }
}

class RegistrationForm extends Component {
    static validate = (values, props) => {
        const strings = new LocalizedStrings({
            en: {
                required: "Required",
                eight: "eight",
                minLength: "Minimum length of {0} is required",
                maxLength: "Maximum is {0} characters",
                sinxteen: "16",
                invalidEmail: "Invalid Email Address",
                invalidMobile: "Invalid Mobile Address",
                invalidConfirm: "Password didn't match"
            },
            fa: {
                required: "الزامیست",
                eight: "هشت",
                minLength: "حداقل طول ,ورودی {0} کاراکتر باشد",
                maxLength: "طول ورودی بیش از {0} کاراکتر است",
                sixteen: "۱۶",
                invalidEmail: "آدرس ایمیل نادرست است",
                invalidMobile: "شماره موبایل نادرست است",
                invalidConfirm: "رمز عبور صحیح نیست"
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

        if (!values.firstname) {
            errors.firstname = strings.required
        }

        if (!values.lastname) {
            errors.lastname = strings.required
        }

        if (!values.email) {
            errors.email = strings.required
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = strings.invalidEmail
        }

        if (!values.mobile) {
            errors.mobile = strings.required
        } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/i.test(values.mobile)) {
            errors.mobile = strings.invalidMobile
        }

        if (!values.password) {
            errors.password = strings.required
        } else if (values.password.length < 8) {
            errors.password = strings.formatString(strings.minLength, strings.eight)
        }

        if (!values.passwordConfirm) {
            errors.passwordConfirm = strings.required
        }

        if (values.password != values.passwordConfirm) {
            errors.passwordConfirm = strings.invalidConfirm
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
        const {fields: {firstname, lastname, email, username, password, passwordConfirm, mobile}, resetForm, handleSubmit, submitting} = this.props;
        return (
            <Form onSubmit={handleSubmit(this.handleSubmit.bind(this))} horizontal>
                <FormInput title={this.strings.firstname} field={firstname} example={this.strings.nameExample}
                           type="text"/>
                <FormInput title={this.strings.lastname} field={lastname} example={this.strings.lastNameExample}
                           type="text"/>
                <FormInput title={this.strings.username} field={username} example={""} type="text"/>
                <FormInput title={this.strings.mobile} field={mobile} example={this.strings.mobileExample} type="text"/>
                <FormInput title={this.strings.email} field={email} example={this.strings.emailExample} type="email"/>
                <FormInput title={this.strings.password} field={password}
                           type="password"/>
                <FormInput title={this.strings.passwordConfirm} field={passwordConfirm}
                           type="password"/>

                <FormGroup>
                    <Col smOffset={2} sm={2}>
                        <Button type="submit">{this.strings.submit}</Button>
                    </Col>
                    <Col sm={2}>
                        <Button type="button" disabled={submitting} onClick={resetForm}>
                            {this.strings.clear}
                        </Button>
                    </Col>
                </FormGroup>


            </Form>
        );


    }
}


RegistrationForm = reduxForm({
    form: 'contact',
    fields: ['firstname', 'lastname', 'email', 'username', 'password', 'passwordConfirm', 'mobile'],
    validate: RegistrationForm.validate
})(RegistrationForm);


class RegistrationPage extends Component {

    static USER_IS_REGISTER = "USER_IS_REGISTER";

    static USER_REGISTRATION_FORM_SUBMITTED = "USER_REGISTRATION_FORM_SUBMITTED";
    static USER_REGISTERED = "USER_REGISTERED";
    static USER_REGISTRATION_SUCCESSFUL = "USER_REGISTRATION_SUCCESSFUL";
    static USER_REGISTRATION_REJECTED = "USER_REGISTRATION_REJECTED";
    static USER_REGISTRATION_ERROR = "USER_REGISTRATION_ERROR";
    static CLEAR_REGISTERED = "CLEAR_REGISTERED";

    static  USER_IS_REGISTER_ACTION = function (username) {
        return {
            type: this.USER_IS_REGISTER,
            username: username
        };
    };

    static  CLEAR_REGISTERED_ACTION = function () {
        return {
            type: RegistrationPage.CLEAR_REGISTERED
        };
    };

    static  USER_REGISTRATION_FORM_SUBMITTED_ACTION = function (form) {
        return (dispatch, getState) => {
            const strings = new LocalizedStrings({
                en: {
                    tryAgain: "Try Again"

                },
                fa: {
                    tryAgain: " دوباره تلاش کن"
                }
            });
            strings.setLanguage(getState().settings.lang);

            fetch(`/api/v0.1-go/users?lang=${getState().settings.lang}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }).then(function (json) {
                if (json.status != 201) {
                    console.log('parsed json', json);
                    Alert.warning(strings.tryAgain, {
                        position: 'top-right',
                        effect: 'stackslide',
                        onShow: function () {
                        },
                        beep: false,
                        timeout: 'none',
                        offset: 100
                    });
                    return;
                }

                dispatch(RegistrationPage.USER_IS_REGISTER_ACTION(form.username));

            }).catch(function (ex) {
                console.log('parsing failed', ex)
            });


        };
        /*return {
         type: USER_REGISTRATION_FORM_SUBMITTED,
         form: form
         };*/
    };


    static mapStateToProps = (state) => {
        return {lang: state.settings.lang, registered: state.auth.registered}
    };

    static  mapDispatchToProps = (dispatch) => {
        return {

            getRegions: ()=> dispatch(rest.actions.regions.sync()),
            register: bindActionCreators(RegistrationPage.USER_REGISTRATION_FORM_SUBMITTED_ACTION, dispatch),
            goToLogin: bindActionCreators(Login.GO_TO_LOGIN_ACTION, dispatch),
            clearRegistered: bindActionCreators(RegistrationPage.CLEAR_REGISTERED_ACTION, dispatch),


        }
    };


    constructor(props) {
        super(props);
        //console.log(this.props.changeLangActions);

        //this.props.changeLangActions("en")
    }

    formIsSubmitted(form) {
        //this.props.goToLogin();
        this.props.register(form);
    }

    render() {
        const regForm = (

            <Grid>

                <Row>
                    <h1></h1>

                    <h1></h1>

                    <h1></h1>

                </Row>
                <Row>

                    <Col xs={12} md={8}>
                        <RegistrationForm onSubmit2={this.formIsSubmitted.bind(this)} lang={this.props.lang}>

                        </RegistrationForm>
                    </Col>
                </Row>
            </Grid>
        );

        const successful = (<div>
            <RegistrationSuccessful lang={this.props.lang} goToLogin={this.props.goToLogin}/>
            <Col xs={12} md={2}>
                <Button onClick={this.props.clearRegistered}>
                    New User
                </Button>
            </Col>
        </div>);

        return ((this.props.registered) ? successful : regForm);
    }

    componentDidMount() {
        //const {dispatch} = this.props;
        //this.props.getRegions();
        //console.log (dispatch);
    }
}


export default connect(RegistrationPage.mapStateToProps,
    RegistrationPage.mapDispatchToProps)(RegistrationPage);