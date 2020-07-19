var express = require('express');
var router = express.Router();
var user = require('../controllers/userController')


/* GET home page. */
router.get('/', user.getUsers );
router.get('/selUser', user.selUser );

module.exports = router;
