import Root from "./Root.jsx";


const reducer = (state = {}, {type = "", payload={}}) => {
    switch (type) {
        /*case BidAsk.SCHEDULE_CHANGED:
            var result = {...state};

            result.records = result.records | {};


            if (result.records[payload.key]) {
                result.records[payload.key] = {...result.records[payload.key], ...payload.schedule}
                return result;
            }

            result.records[payload.key] = payload.schedule;
            return result;*/

        default:
            return state;
    }
};

export default reducer;