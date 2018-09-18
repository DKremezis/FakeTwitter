const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);

module.exports = app;