var express = require('express');
var router = express.Router();
var user = require('../controllers/userController')


/* GET home page. */
router.get('/', user.getUsers );
router.get('/getUsers', user.getUsers );
router.get('/selUser', user.selUser );
router.post('/login', user.login );
router.post('/sign', user.sign );
router.get('/updateUser', user.updateUser );

module.exports = router;
