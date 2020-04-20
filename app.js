const express = require('express');
// const helmet = require('helmet');
const path = require('path');
// const authRoutes = require('./routes/auth-routes');
// const dashboardRoutes = require('./routes/dashboard');
// const authGuardRoute = require('./routes/auth-guard');
// const passportgoogleSetup = require('./config/passport-setup-google');
// const passportfacebookSetup = require('./config/passport-setup-facebook');
// const mongoose = require('mongoose');
// const keys = require('./config/keys');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
// const bodyParser = require('body-parser');
// var favicon = require('serve-favicon');

// EXPRESS INITIALIZATION
const app = express();

// // HELMET 
// app.use(helmet());

// // BODYPARSER
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// FAVICON + PUBLIC DIR
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(__dirname + '/public'));

// // COOKIEEEEE <3
// app.use(cookieSession({
//     maxAge: 24*60*60*1000,
//     keys: [keys.session.cookieKey]
// }));

// // PASSPORT INITIALIZATION 
// app.use(passport.initialize());
// app.use(passport.session());

// // OAUTH ROUTES BRUH
// app.use('/api/authguard', authGuardRoute);
// app.use('/api/auth', authRoutes);
// app.use('/#/dashboard', dashboardRoutes);

// // CONNECT TO DB BRAH
// mongoose.connect(keys.mongoDB.dbURL, () => {
//     console.log('Connected to DB');
// })

// // VIEW HBS
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// HOMEPAGE STUFF 
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// PORT NUMBER FOR LISTENING
app.listen(process.env.PORT || 3000, () => {
    console.log("working on port 3000");
})
