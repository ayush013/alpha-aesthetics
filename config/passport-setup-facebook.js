const passport = require('passport');
const FacebookStrategy = require('passport-facebook')
const keys = require('./keys');
const ProfileData = require('../models/profile-data')

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  

passport.deserializeUser((id, done) => {
ProfileData.findById(id, (err, user) => {
    done(err, user);
});
});

passport.use(
    new FacebookStrategy({
        clientID: keys.facebook.FACEBOOK_APP_ID,
        clientSecret: keys.facebook.FACEBOOK_APP_SECRET,
        callbackURL: "/api/auth/facebook/redirect",
        profileFields: ['id', 'first_name', 'last_name', 'picture', 'email', 'gender']
    }, (accessToken, refreshToken, profile, cb) => {

        console.log(`accesstoken : ${accessToken}`)
        console.log(`REFRESHtoken : ${refreshToken}`)
        
        ProfileData.findOne({ email: profile.emails[0].value })
        .then((Profile) => {

        if(Profile) {
            // HAS LOGGED IN AS GOOGLE PREVIOUSLY
            if((typeof Profile.facebookID == 'undefined') && (typeof Profile.googleID !== 'undefined')) {
                ProfileData.findByIdAndUpdate({ _id: Profile._id }, { facebookID: profile.id })
                .then( (Profile) => {
                    console.log(`added fb id: ${Profile}`);
                    return cb(null, Profile);
                })
                .catch((error) => console.log(error));
            }
            // HAS LOGGED IN AS FACEBOOK PREVIOUSLY
            else if((typeof Profile.facebookID !== 'undefined') && (typeof Profile.googleID == 'undefined')) {
                console.log(`already fb: ${Profile}`);
                return cb(null, Profile);
            }
            // HAS LOGGED IN AS BOTH PREVIOUSLY
            else if((typeof Profile.facebookID !== 'undefined') && (typeof Profile.googleID !== 'undefined')) {
                console.log(`already both: ${Profile}`);
                return cb(null, Profile);
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
                    return cb(null, Profile);
                })
                .catch((error) => console.log(error));
    
            }
    
        }).catch((error) => console.log(error));

})
);
