const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
})
);

router.get('/facebook', passport.authenticate('facebook', 
    { authType: 'rerequest', scope: ['email','user_gender'] })
);

router.get('/logout', (req, res) => {
    req.logout();
    res.send({ loggedout: true})
});

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/#/dashboard');
});

router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/#/dashboard');
});

module.exports = router;