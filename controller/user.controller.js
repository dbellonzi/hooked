const db = require('../config/db.config.js')
const user = db.user

exports.create =(req,res)=>{
    user.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        phone_number: req.body.phonenumber,
        user_name: req.body.username,
        password: req.body.password,

    }). then((user)=>{
        res.json(user)
    }). catch((err)=>{
        res.status(501).send({
            error: "could not add new user to the database"
        })
    })
}

exports.delete = (req,res)=>{
    const id = req.params.id;
    user.destory({
        where:{id:id}
    }).then(deleteUser =>{
        res.json(deleteUser)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete User'})
    })
}

exports.findAll =(req, res) =>{
    user.findAll(). then((users)=>{
        res.json(users)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve user'})
    })
}
