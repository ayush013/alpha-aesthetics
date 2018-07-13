const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    googleID: String,
    fname: String,
    lname: String,
    gender: String,
    email: String,
    imgsrc: String
});

const ProfileData = mongoose.model('profile', ProfileSchema);

module.exports = ProfileData;