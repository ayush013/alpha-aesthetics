const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileData = new Schema({
    username: String,
    googleid: String
})