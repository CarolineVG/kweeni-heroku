const express = require('express')
const router = express.Router();

/* kweeni */
router.get('/', function(req, res){
    res.render('./kweeni', {title: 'kweeni'}); 
});

module.exports = router;