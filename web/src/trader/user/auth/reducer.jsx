const reducer = (state = {}, {type = "", payload={}}) => {
    if (type === "USER_LOGGED_IN") {
        return payload
    }
    if (type === "USER_LOGGED_OUT") {
        return {}
    }
    if (type === "USER_IS_REGISTER") {
        return {...state, registered: true}
    }
    if (type === "USER_IS_LOGGEDIN") {
        console.log("reducer for login");
        return {...state, token: payload.token}
    }

    if (type === "USER_IS_LOGGEDOUT") {
        console.log("reducer for logout");
        return {...state, token: null}
    }
    if (type === "CONFIRMATION_ACCEPTED") {
        console.log("reducer for confirmation accpeted");
        return {...state, confirmation: payload.confirmation}
    }
    if (type === "CLEAR_REGISTERED") {
        console.log("reducer for CLEAR_REGISTERED");
        return {...state, registered: false}
    }

    return state
};


export default reducer;