import Settings from "./Settings.jsx"

const reducer = (state = {}, { type = "", payload={} }) => {
    if (type == Settings.CHANGE_LANGUGAE) {
        return {...state, lang: payload.lang}
    }

    if (type == Settings.CHANGE_CURRENCY) {
        console.log(payload.currency);
        return {...state, currency: payload.currency}
    }

    return state
};

export default reducer;