export default class DefaultValues {

    static GetTables() {
        return ["auth", "settings"];

    }

    static GetState(restoredState) {
        var lastState = {
            settings: {
                lang: "fa",
                currency: "IRR"
            },
            app: {
                menu: {
                    isOpen: false
                }
            },
            auth: {},
            ...restoredState
        };

        return lastState;
    }
}   