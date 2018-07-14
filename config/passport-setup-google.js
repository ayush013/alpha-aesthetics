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

    ProfileData.findOne({ email: profile.emails[0].value })
    .then((Profile) => {

        if(Profile) {
            // HAS LOGGED IN AS FACEBOOK PREVIOUSLY
            if((typeof Profile.facebookID !== 'undefined') && (typeof Profile.googleID == 'undefined')) {
                ProfileData.findByIdAndUpdate({ _id: Profile._id }, { googleID: profile.id })
                .then( (Profile) => {
                    console.log(`added google id: ${Profile}`);
                    done(null, Profile);
                })
                .catch((error) => console.log(error));
            }
            // HAS LOGGED IN AS GOOGLE PREVIOUSLY
            else if((typeof Profile.facebookID == 'undefined') && (typeof Profile.googleID !== 'undefined')) {
                console.log(`already google: ${Profile}`);
                done(null, Profile);
            }
            // HAS LOGGED IN AS BOTH PREVIOUSLY
            else if((typeof Profile.facebookID !== 'undefined') && (typeof Profile.googleID !== 'undefined')) {
                console.log(`already both: ${Profile}`);
                done(null, Profile);
            }
        }
        // NEW USER :)
        else {
            new ProfileData({
                facebookID: profile.id,
                fname: profile.name.givenName,
                lname: profile.name.familyName,
                email: profile.emails[0].value,
                imgsrc: profile.photos[0].value,
                gender: profile.gender
            })
            .save()
            .then((Profile) => {
                console.log(`new profile created: ${Profile}`);
                done(null, Profile);
            })
            .catch((error) => console.log(error));

        }

    }).catch((error) => console.log(error));

})
);
