var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var mongoose = require('mongoose')
mongoose.Promise = global.Promise;

var indexRouter = require('./routes/index');
var systemConfig = require('./configs/system');


mongoose.connect('mongodb://tdloan:tdloan123@ds239873.mlab.com:39873/dloan')
        .then(()=>console.log('Connected Successfull'))
        .catch((err)=>console.log(err)); 

       


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'backend');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.systemConfig = systemConfig;

app.use(`/${systemConfig.prefixAdmin}`, indexRouter);
app.use('/', require('./routes/fontEnd/index'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('../views/pages/error',{title:'Page Error'});
});

module.exports = app;
