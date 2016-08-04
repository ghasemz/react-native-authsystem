import  express from 'express';
import  sourceMapSupport from 'source-map-support'

var app, bodyParser, compression, cookieParser, favicon, fs, path, session;


path = require('path');

cookieParser = require('cookie-parser');

bodyParser = require('body-parser');

fs = require('fs');

session = require('express-session');

compression = require('compression');
var requestProxy = require('express-request-proxy');

app = express();

app.set('port', process.env.PORT || 3233);

app.set('mongo_addr', process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost');

app.set('mongo_port', process.env.MONGO_PORT_27017_TCP_PORT || 27017);

app.use(compression());

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');


app.use('/api/v0.1-go/markets/:market/instruments/:id/timeseries/:step/candles', requestProxy({
    url: 'http://localhost:8080/api/v0.1-go/markets/:market/instruments/:id/timeseries/:step/candles'
}));

app.use('/api/v0.1-go/markets/:market/instruments', requestProxy({
    url: 'http://localhost:8080/api/v0.1-go/markets/:market/instruments'
}));


app.use('/api/v0.1-go/markets/:market/history/:id', requestProxy({
    url: 'http://localhost:8080/api/v0.1-go/markets/:market/history/:id'
}));

app.use('/api/v0.1-go/users', requestProxy({
    url: 'http://localhost:8080/api/v0.1-go/users',
    headers: {
        'Content-Type': "application/json"
    }
}));

app.use('/api/v0.1-go/logins', requestProxy({
    url: 'http://localhost:8080/api/v0.1-go/logins',
    headers: {
        'Content-Type': "application/json"
    }
}));

app.use('/api/v0.1-go/instruments/:id/bidasks', requestProxy({
    url: 'http://localhost:8080/api/v0.1-go/instruments/:id/bidasks',
    headers: {
        'Content-Type': "application/json"
    }
}));

app.use('/api/v0.1-go/news/bundles/recent', requestProxy({
    url: 'http://localhost:8080/api/v0.1-go/news/bundles/recent',
    headers: {
        'Content-Type': "application/json"
    }
}));

app.use('/api/v0.1-go/confirmations/:id', requestProxy({
    url: 'http://localhost:8080/api/v0.1-go/confirmations/:id',
    headers: {
        'Content-Type': "application/json"
    }
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use('/', require('./trader'));

var public_root = express["static"]("dist/");

app.use('/', public_root);
app.use('/:lang', public_root);
app.use('/:lang/i/:instId', public_root);
app.use('/:lang/register', public_root);
app.use('/:lang/login', public_root);
app.use('/:lang/settings', public_root);
app.use('/:lang/confirmations/:id', public_root);


sourceMapSupport.install();


app.listen(process.env.PORT || 3233, function () {
});
