const router = require('express').Router();

router.get('/', checkAuthentication, (req,res) => {
    return res.status(200).send({
        authenticated: true
    })
});

function checkAuthentication(req,res,next) {
    if(req.isAuthenticated()){
        next();
    } 
    else {
        return res.status(401).send({
            authenticated: false
        })
    }
}

module.exports = router;