const express                  = require('express');
const path                     = require('path');
const cookieParser             = require('cookie-parser');
const logger                   = require('morgan');
const {notFound, errorHandler} = require('./middlewares');
const app                      = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// our routes
app.get('/', (req,res) => {
    res.json({
        message: 'Welcome to world!'
    })
})














app.use(notFound);
app.use(errorHandler);


module.exports = app;
