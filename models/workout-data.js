const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    route: String,
    workout: [
        [ {name: String} ],
        [ {exercise: String} ]
    ],
    title: String,
    features: [String],
    description: String,
    imgsrc: String,
    free: Boolean
});

const BlogData = mongoose.model('blog', BlogSchema);

module.exports = BlogData;