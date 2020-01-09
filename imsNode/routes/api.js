var express = require('express');
var router = express.Router();
var cors = require('./../middlewares/cors.js');
var userController = require('./../controller/user.js');
var classController = require('./../controller/class.js');
var articleController = require('./../controller/article.js')
var authController = require('./../controller/auth.js')
var middleAuth = require('./../middlewares/middleAuth.js')

/* GET users listing. */
router.get('/',function(req,res,next){
	res.send('respond with a resource')
});
router.post('/user',middleAuth,userController.insert);
router.put('/user/:id',middleAuth,userController.update);
router.delete('/user/:id',middleAuth,userController.delete);
router.get('/user',middleAuth,userController.show);
router.get('/user/:id/edit',middleAuth,userController.edit);
router.post('/class',middleAuth,classController.insert);
router.put('/class/:id',middleAuth,classController.update);
router.delete('/class/:id',middleAuth,classController.delete);
router.get('/class',middleAuth,classController.show);
router.get('/class/:id/edit',middleAuth,classController.edit);
router.post('/article',middleAuth,articleController.insert);
router.put('/article/:id',middleAuth,articleController.update);
router.delete('/article/:id',middleAuth,articleController.delete);
router.get('/article',middleAuth,articleController.show);
router.get('/article/:id/edit',middleAuth, articleController.edit);
router.post('/login',authController.login);
// router.get('/user',userController.pagination);
router.get('/index',articleController.home);
router.get('/index/:id/show',articleController.indexShow);
module.exports = router;
