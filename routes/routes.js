var express = require('express')
var router = express.Router()
var passport = require('passport');
// var passportlocal = require('passport-local')
var db = require('../config/db.config.js')

router.post('/api/events', (req, res)=>{
    db.event.create({
        title:req.body.title,
        description: req.body.description,
        event_photo: req.body.event_photo,
        location: req.body.event_photo,
        location: req.body.location,
        time: req.body.time,
        date: req.body.date,
        details: req.body.details,
        map_photo: req.body.map_photo,
    }). then((event)=>{
        res.json(event)
    }).catch((error)=>{
        res.status(501).send({error: 'problem entering event into database'})
    })
})

router.post('/api/products', (req,res)=>{
    db.product.create({
        productname: req.body.productname,
        productdescription: req.body.productdescription,
        productimage: req.body.productimage,
    }). then((product)=>{
        res.json(product)
    }). catch((err)=>{
        res.status(501).send({error: 'problem entering product into database'})
    })
})

// creates the products

router.post('/api/users', (req,res)=>{
    db.user.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    }). then((user)=>{
        res.json(user)
    }). catch((err)=>{
        res.status(501).send({
            error: "could not add new user to the database"
        })
    })
})

router.get('/api/sponsor/all' ,(req, res) =>{
    db.sponsor.findAll(). then((sponsor)=>{
        res.json(sponsor)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve sponsors'})
    })
})

router.get('/api/events/all' ,(req, res) =>{
    db.product.findAll(). then((products)=>{
        res.json(events)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve event'})
    })
})

//creates user and puts into the database

router.get('/api/products/all' ,(req, res) =>{
    db.product.findAll(). then((products)=>{
        res.json(products)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve product'})
    })
})

// retrieves all users from database

router.get('/api/users/all' ,(req, res) =>{
    db.user.findAll(). then((users)=>{
        res.json(users)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve user'})
    })
})

router.delete('/api/product/:id', (req,res)=>{
    const id = req.params.id;
    db.product.destory({
        where:{id:id}
    }).then(deleteproduct =>{
        res.json(deleteproduct)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete product'})
    })
})
// deletes instance of a product

router.delete('/api/event/:id', (req,res)=>{
    const id = req.params.id;
    db.event.destory({
        where:{id:id}
    }).then(deleteEvent =>{
        res.json(deleteEvent)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete Event'})
    })
})
// delete instance of and event

router.delete('/api/sponsor/:id', (req,res)=>{
    const id = req.params.id;
    db.sponsor.destory({
        where:{id:id}
    }).then(sponsor =>{
        res.json(sponsor)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete Sponsor'})
    })
})

// Still need to create the UPDATE ROUTES

module.exports = router;