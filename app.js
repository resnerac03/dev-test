 


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