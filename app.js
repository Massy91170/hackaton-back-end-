require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./models/connection");



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trajetsRouter = require('./routes/trajets');
var bookingsRouter = require('./routes/bookings');

var cartRouter = require('./routes/cart');

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trajets', trajetsRouter);
app.use('/bookings', bookingsRouter);

app.use('/cart', cartRouter);

module.exports = app;
