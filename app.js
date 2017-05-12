var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var marked = require('marked')

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

  // list files and folders using nodejs
  // Source "https://sankartypo3.wordpress.com/2013/02/12/how-to-list-files-and-folders-using-nodejs/"
  // var fs = require('fs');
  // fs.readdir('/', function (err, files) { // '/' denotes the root folder
  //   if (err) throw err;
  //
  //   files.forEach( function (file) {
  //     fs.lstat('/'+file, function(err, stats) {
  //       if (!err && stats.isDirectory()) { //conditing for identifying folders
  //         $('ul#foldertree').append('<li class="folder">'+file+'</li>');
  //       }
  //       else{
  //         $('ul#foldertree').append('<li class="file">'+file+'</li>');
  //       }
  //     });
  //   });
  // });

app.listen(3000, function() {
  console.log("http://localhost:3000")



})
