const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { 
    display: 'popup',
    scope: ['profile','email']
})
);

router.get('/facebook', passport.authenticate('facebook', { 
    display: 'popup', 
    scope: ['email','user_gender'] })
);

router.get('/logout', (req, res) => {
    req.logout();
    return res.status(205).send();
});

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/#/dashboard');
});

router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/#/dashboard');
});

module.exports = router;