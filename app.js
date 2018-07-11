const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

app.use('/auth', authRoutes);

mongoose.connect(keys.mongoDB.dbURL, () => {
    console.log('Connected to DB');
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log("working on port 3000");
})
