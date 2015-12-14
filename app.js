
/**
 * Module dependencies.
 */

var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var routes = require('./routes');
var home = require('./routes/home');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var mongo = require('mongodb');

var app = express();

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/local';

mongo.Db.connect(mongoUri, function (err, db) {
  db.collection("places", function(er, collection) {
    collection.insert({'name': 'Chet', 'address' : '34 Chetwynd Rd'}, {safe: true}, function(er,rs) {
    });
  });
});



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});
app.use(express.static(path.join(__dirname, 'public')));

console.log(passport.use);
console.log(LocalStrategy);
passport.use(new LocalStrategy(
	function (username, password, done) {
		User.findone({ username: username }, function (err, user) {
			if (err) { return done(err); }
			if (!user) { 
				return done(null, false, { message: 'Incorrect username.'})
			}
			if (!user.validPassword(password)) {
				return done(null, false, {message: 'Incorrect password.'});
			}
			return done(null, user);
		});
	}
));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/login', passport.authenticate('local', { successRedirect: '/home' }));

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/home', routes.home);

app.post('/chkLogin.json', function (req, res) {
	if (req.body.username == "bill" && req.body.password == "test") {
		res.send(true);
	} else {
		res.send(false);
	}
})

app.post('/addApartment', function (req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
		db.collection("places", function (er, collection) {
			var name = req.name;
			collection.insert({"name" : name, "address" : address}, function (err, r) {});
			res.send("response text");
		})
	})
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
