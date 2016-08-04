import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router'
import {reducer as formReducer} from 'redux-form';
import {Instrument as Instrument, reducer as insReducer} from 'trader/instrument';
import {Registration, reducer as authReducer, Login, Confirmation} from 'trader/user/auth';
import Home from "trader/home"
import App, {reducer as appReducer} from "trader/app";
import {reducer as scheduleReducer} from "trader/schedule";
import {reducer as bidaskReducer} from "trader/bidask";
import Settings, {reducer as settingsReducer, DefaultValues} from "trader/settings";
import {reducer as datasheetReducer} from "trader/datasheet";
import About from "trader/about";
import {Root} from "trader/root";

import {createHistory} from 'history'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import {
    routerReducer,
    syncHistoryWithStore,
    routerActions,
    routerMiddleware,
    routerStateReducer
} from 'react-router-redux'

import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {getStoredState, autoRehydrate, createPersistor} from 'redux-persist'

const reducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    app: appReducer,
    auth: authReducer,
    settings: settingsReducer,
    instruments: insReducer,
    schedules: scheduleReducer,
    bidasks: bidaskReducer,
    datasheets: datasheetReducer
});

const baseHistory = browserHistory;
const routingMiddleware = routerMiddleware(baseHistory);

const persistConfig = {whitelist: DefaultValues.GetTables()};

getStoredState(persistConfig, (err, restoredState) => {
    const lastState = DefaultValues.GetState(restoredState);

    const store = applyMiddleware(thunk)(createStore)(
        reducer,
        lastState,
        applyMiddleware(routingMiddleware)
    );
    const persistor = createPersistor(store, persistConfig);
    const history = syncHistoryWithStore(baseHistory, store);

    const rootEl = document.getElementById('root');

    ReactDOM.render((
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path=":lang" component={Home}/>
                    <Route path=":lang" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path='about' component={About}/>
                        <Route path="register" component={Registration}/>
                        <Route path="login" component={Login}/>
                        <Route path="settings" component={Settings}/>
                        <Route path="confirmations/:confid" component={Confirmation}/>
                        <Route path="i/:instId" component={Instrument}/>
                    </Route>

                </Route>


            </Router>
        </Provider>
    ), rootEl);
});