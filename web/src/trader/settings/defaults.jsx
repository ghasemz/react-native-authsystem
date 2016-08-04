export default class DefaultValues {

    static GetTables() {
        return ["auth", "settings", "instruments", "schedules", "bidasks", "datasheets"];
    }

    static GetState(restoredState) {
        const default_table_options = {
            sizePerPageList: [10, 20, 30, 50, 100, 200],
            paginationSize: 3,
            sizePerPage: 20
        };

        const default_table_sorting = {
            column: "volume",
            order: "desc"
        };

        const schedule_records = {
            tse: {
                toTime: Date.parse('Thu, 01 Jan 1970 12:30:00 GMT+0430'),
                fromTime: Date.parse('Thu, 01 Jan 1970 08:30:00 GMT+0430'),
                active: true,
                period: 500
            },
            ime: {
                toTime: Date.parse('Thu, 01 Jan 1970 19:00:00 GMT+0430'),
                fromTime: Date.parse('Thu, 01 Jan 1970 10:00:00 GMT+0430'),
                active: true,
                period: 1000
            },
            spot: {
                toTime: Date.parse('Thu, 01 Jan 1970 19:00:00 GMT+0430'),
                fromTime: Date.parse('Thu, 01 Jan 1970 09:00:00 GMT+0430'),
                active: true,
                period: 5000
            },
            news_bundles_recent: {
                toTime: Date.parse('Thu, 01 Jan 1970 12:30:00 GMT+0430'),
                fromTime: Date.parse('Thu, 01 Jan 1970 08:30:00 GMT+0430'),
                active: true,
                period: 30000
            }
        };


        var instruments_tables = {
            tse: {
                sort: {...default_table_sorting},
                option: {...default_table_options}
            },
            ime: {
                sort: {...default_table_sorting},
                option: {...default_table_options}
            },
            spot: {
                sort: {...default_table_sorting},
                option: {...default_table_options}
            }
        };

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
            datasheets: {},
            schedules: schedule_records,
            instruments: {
                tse: [],
                ime: [],
                spot: [],
                tables: instruments_tables
            }
            , ...restoredState
        };

        if (restoredState.instruments) {
            lastState.instruments = {
                tse: [],
                ime: [],
                spot: [],
                ...restoredState.instruments
            };
            if (restoredState.instruments.tables) {
                lastState.instruments.tables = {
                    ...instruments_tables, ...restoredState.instruments.tables
                };
            }
        }


        if (restoredState.schedules) {
            lastState.schedules = {
                ...schedule_records,
                ...restoredState.schedules
            };
        }

        if (restoredState.datasheets) {
            lastState.datasheets = {
                ...restoredState.datasheets
            };
        }


        return lastState;
    }
}