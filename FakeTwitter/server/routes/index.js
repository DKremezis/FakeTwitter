const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Hello World');
});

module.exports = router;