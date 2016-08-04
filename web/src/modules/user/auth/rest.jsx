import "isomorphic-fetch";
import reduxApi, {transformers} from "redux-api";
import adapterFetch from "redux-api/lib/adapters/fetch";
export default reduxApi({
    // simple edpoint description
    entry: `/api/v1/entry/:id`,
    // complex endpoint description
    regions: {
        url: `/api/v1/regions`,
        // reimplement default `transformers.object`
        transformer: transformers.array,
        // base endpoint options `fetch(url, options)`
        options: {
            headers: {
                "Accept": "application/json"
            }
        }
    }
}).use("fetch", adapterFetch(fetch)); // it's necessary to point using REST backend