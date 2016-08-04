import App from "./App.jsx"

const reducer = (state = {}, { type = "", payload={} }) => {
    if (type === App.CHANGE_MENU_STATE_ACTION) {
        return {...state, menu: {isOpen: payload.isOpen}}
    }

    return state
};


export default reducer;