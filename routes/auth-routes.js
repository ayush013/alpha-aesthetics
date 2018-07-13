const router = require('express').Router();
const passport = require('passport');
const JSON = require('circular-json');

router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
})
);


router.get('/logout', (req, res) => {
    // 
    res.send("Logging out");
});

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    console.log(`PROFILE : ${req.user}`)
    res.redirect('http://localhost:4200/#/dashboard');
    res.send(req.user);
});

module.exports = router;