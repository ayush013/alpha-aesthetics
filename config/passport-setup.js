const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const ProfileData = require('../models/profile-data')


passport.serializeUser((Profile, done) => {
    done(null, Profile.id);
});

passport.deserializeUser((id, done) => {
    ProfileData.findById(id)
    .then((Profile) => {
        done(null, Profile);
    });
});

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
}, (accesstoken, refreshtoken, profile, done) => {

    ProfileData.findOne({ googleID: profile.id })
    .then((Profile) => {
        if(Profile) {
            console.log(`already exists: ${Profile}`)
            done(null, Profile);
        }
        else {
            new ProfileData({
                googleID: profile.id,
                fname: profile.name.givenName,
                lname: profile.name.familyName,
                email: profile.emails[0].value,
                imgsrc: profile.photos[0].value,
                gender: profile.gender
            }).save()
            .then((Profile) => {
                console.log(`new profile created: ${Profile}`)
                done(null, Profile);
            })
            .catch((error) => console.log(error));

        }

    }).catch((error) => console.log(error));

    




})
);