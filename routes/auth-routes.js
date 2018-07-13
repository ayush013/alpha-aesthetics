const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
})
);

router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email','user_gender'] 
})
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    console.log(`PROFILE : ${req.user}`)
    res.redirect('/#/dashboard');
});

router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    console.log(`PROFILE : ${req}`)
    res.redirect('/#/dashboard');
});

module.exports = router;