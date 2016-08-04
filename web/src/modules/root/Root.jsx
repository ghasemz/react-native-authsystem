import 'whatwg-fetch';

import React from 'react';
import {Registration, Login} from 'modules/user/auth';
import {connect} from 'react-redux';
import Settings from 'modules/settings';
import {push, replace} from 'react-router-redux';
import {bindActionCreators} from 'redux';

class Root extends React.Component {
    static REPLACE_PATH_ACTION = (path)=> {
        return (dispatch, getState)=> {
            if (path) {
                dispatch(replace(path));
                return
            }
            dispatch(replace('/'));
        };
    };

    constructor(props) {
        super(props);
        //default language is persian
        const defaultLanguage = "fa";

        //everything is ok
        if (props.lang == props.params.lang) {
            return
        }

        //default language may have no prefix
        if (!props.params.lang && props.lang == defaultLanguage) {
            //nothing
            return
        }

        //lang is not compatible with the requested one
        //change the lang to what is requested
        if (props.params.lang != props.lang) {
            setTimeout(function () {
                /*props.changeLang(props.params.lang || defaultLanguage);
                 console.log(props);
                 props.replacePath("/" + (props.params.lang || defaultLanguage));*/
            }, 10);
        }

    }


    render() {
        return this.props.children
    }


    static mapStateToProps = (state) => {
        return {
            lang: state.settings.lang,
            routing: state.routing
        }
    };

    static  mapDispatchToProps = (dispatch) => {
        return {
            replacePath: bindActionCreators(Root.REPLACE_PATH_ACTION, dispatch),
            changeLang: bindActionCreators(Settings.CHANGE_LANG_ACTION, dispatch)
        }
    };
}

export default connect(Root.mapStateToProps,
    Root.mapDispatchToProps)(Root);