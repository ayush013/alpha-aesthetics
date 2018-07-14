const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth-routes');
const dashboardRoutes = require('./routes/dashboard');
const passportgoogleSetup = require('./config/passport-setup-google');
const passportfacebookSetup = require('./config/passport-setup-facebook');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
var favicon = require('serve-favicon');

// EXPRESS INITIALIZATION
const app = express();

// CORS BABY

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


// COOKIEEEEE <3
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}));

// BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// PASSPORT INITIALIZATION 
app.use(passport.initialize());
app.use(passport.session());

// OAUTH ROUTES BRUH
app.use('/auth', authRoutes);
app.use('/#/dashboard', dashboardRoutes);

// CONNECT TO DB BRAH
mongoose.connect(keys.mongoDB.dbURL, () => {
    console.log('Connected to DB');
})

// VIEW HBS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// HOMEPAGE STUFF 
app.get('/', function (req, res, next) {
    res.render('index');
});


// PORT NUMBER FOR LISTENING
app.listen(3000, () => {
    console.log("working on port 3000");
})
