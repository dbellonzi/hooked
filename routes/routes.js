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
router.post('/api/sponors', sponor.create)
router.post('/api/orders', order.create)

router.get('/api/sponsor/all' , sponsor.findAll)
router.get('/api/events/all', event.findAll);
router.get('/api/products/all', product.findAll)
router.get('/api/users/all' , user.findAll);
router.get('/api/orders/all' , order.findAll);


router.delete('/api/user/:id', user.delete)
router.delete('/api/product/:id', product.delete)
router.delete('/api/event/:id', event.delete)
router.delete('/api/sponsor/:id', sponsor.delete)
router.delete('/api/order/:id', order.delete)

// Still need to create the UPDATE ROUTES
// Still need to make individual query to database 

module.exports = router;