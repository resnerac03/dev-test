var express           = require('express');
var path              = require('path');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var exphbs            = require('express-handlebars');
var expressValidator  = require('express-validator');
var flash             = require('connect-flash');
var session           = require('express-session');
var passport          = require('passport');
var LocalStrategy     = require('passport-local').Strategy;
var mongo             = require('mongodb');
var mongoose          = require('mongoose');
var fetchFiles        = require('./helpers').fetchFiles;


mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;




// var routes = require('./routes/index');
// var users = require('./routes/users');
// var manageUsers = require('./routes/manage-user');
// var inventory = require('./routes/inventory');
// var f_1267 = require('./routes/f-1267');




// Init App
var app   = express();
var route = require('./routes');

// View Engine
app.set('views', path.join(__dirname, 'views'));
var hbs = exphbs.create({
    defaultLayout:'layout',
    extname: '.html',
    helpers: {
    }
})
app.engine('.html', hbs.engine);
app.set('view engine', '.html');




// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));




// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));




// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

fetchFiles(__dirname + '/routes/', function(name){
  // console.log('wew',__dirname+'/routes')
    // console.log(route[name]);
    app.use('/', route[name]);
})

// app.use('/',f_1267);
// app.use('/', routes);
// app.use('/users', users);
// app.use('/', manageUsers);
// app.use('/',inventory);

// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});