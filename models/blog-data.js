const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    route: String,
    article: String,
    title: String,
    text: String,
    icon: String,
    category: String,
    imgsrc: String
});

const BlogData = mongoose.model('blog', BlogSchema);

module.exports = BlogData;