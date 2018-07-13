const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');


// EXPRESS INITIALIZATION
const app = express();

// COOKIEEEEE <3
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}));

// PASSPORT INITIALIZATION 
app.use(passport.initialize());
app.use(passport.session());

// OAUTH ROUTES BRUH
app.use('/auth', authRoutes);

// CONNECT TO DB BRAH
mongoose.connect(keys.mongoDB.dbURL, () => {
    console.log('Connected to DB');
})

// HOMEPAGE STUFF 
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// PORT NUMBER FOR LISTENING
app.listen(3000, () => {
    console.log("working on port 3000");
})
