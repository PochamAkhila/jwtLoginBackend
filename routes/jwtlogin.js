var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

/* GET home page. */
router.post('/', function(req, res, next) {
    const {username,password} = req.body

    if(username=="admin" & password=="Admin@123"){
        let jwtToken = jwt.sign({user:username}, 'uiux',{expiresIn:"1h"});

      res.send({jwtToken})
    }
    if(username=="Akhila" & password=="Password@123"){
        let jwtToken = jwt.sign({user:username}, 'uiux');

      res.send({jwtToken})
    }
    else{
        res.status(404)
       res.send("Invalid")
    }
});

module.exports = router;