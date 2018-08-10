var express = require('express')
var router = express.Router()
var passport = require('passport');
// var passportlocal = require('passport-local')
var db = require('../config/db.config.js')

const event = require('../controller/event.controller');
const user = require('../controller/user.controller');
const product = require('../controller/product.controller');
const sponsor = require('../controller/sponsor.controller');
const order = require('../controller/order.controller');

router.post('/api/events', event.create);
router.post('/api/products', product.create);
router.post('/api/users', user.create);
router.post('/api/sponors', sponsor.create);
router.post('/api/orders', order.create);

router.get('/api/sponsors/all' , sponsor.findAll);
router.get('/api/events/all', event.findAll);
router.get('/api/products/all', product.findAll);
router.get('/api/users/all' , user.findAll);
router.get('/api/orders/all' , order.findAll);

router.get('/api/user/:userId', user.findById);
router.get('/api/product/:productId', product.findById);
router.get('/api/event/:eventId', event.findById);
router.get('/api/sponsor/:sponsorId', sponsor.findById);
router.get('/api/order/:orderId', order.findById);

router.delete('/api/user/:userId', user.delete);
router.delete('/api/product/:productId', product.delete);
router.delete('/api/event/:eventId', event.delete);
router.delete('/api/sponsor/:sponsorId', sponsor.delete);
router.delete('/api/order/:orderId', order.delete);

router.put('/api/user/:userId', user.update);
router.put('/api/product/:productId', product.update);
router.put('/api/event/:eventId', event.update);
router.put('/api/sponsor/:sponsorId', sponsor.update);
router.put('/api/order/:orderId', order.update);

router.post('/login', passport.authenticate('local', { 
  failureRedirect: '/login',
  successRedirect: '/',
}))

// Still need to create the UPDATE ROUTES
// Still need to make individual query to database 

module.exports = router;