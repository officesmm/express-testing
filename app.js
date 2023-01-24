const serverless = require('serverless-http');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
var hbsutils = require('hbs-utils')(hbs);
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors({origin: '*'}));
app.options('*', cors());
// Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, '../public')  
const viewsPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
// hbs.registerPartials(partialsPath);
hbsutils.registerPartials(partialsPath);
hbsutils.registerWatchedPartials(partialsPath);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/css",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));

app.use("/img",express.static(path.join(__dirname, "public/images")));
app.use("/css",express.static(path.join(__dirname, "public/stylesheets")));
app.use("/js", express.static(path.join(__dirname, "public/javascripts")));

// app.use("/node_modules/bootstrap/dist/css",express.static(__dirname));
// app.use("/node_modules/bootstrap/dist/js", express.static(__dirname));
// app.use("/node_modules/jquery/dist", express.static(__dirname));

// app.use("/public/javascripts", express.static(__dirname));

// app.use(express.static(publicDirectoryPath))

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports.handler = serverless(app); 
// app.listen(3000, () => console.log(`Listening on: 3000`));
// module.exports = app;