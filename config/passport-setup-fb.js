const passport = require('passport');
const FacebookStrategy = require('passport-facebook')
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
    new FacebookStrategy({
        clientID: keys.facebook.FACEBOOK_APP_ID,
        clientSecret: keys.facebook.FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/redirect",
        profileFields: ['id', 'first_name', 'last_name', 'picture', 'email', 'gender']
    }, (accessToken, refreshToken, profile, cb) => {

        console.log(profile)
        
        // ProfileData.findOne({ email: profile.email })
        // .then((Profile) => {
        //     if(Profile) {
        //         console.log(`already exists: ${Profile}`)
        //         done(null, Profile);
        //     }
        //     else {
        //         new ProfileData({
        //             facebookID: profile.id,
        //             fname: profile.name.givenName,
        //             lname: profile.name.familyName,
        //             email: profile.emails[0].value,
        //             imgsrc: profile.photos[0].value,
        //             gender: profile.gender
        //         }).save()
        //         .then((Profile) => {
        //             console.log(`new profile created: ${Profile}`)
        //             done(null, Profile);
        //         })
        //         .catch((error) => console.log(error));
    
        //     }
    
        // }).catch((error) => console.log(error));

})
);
