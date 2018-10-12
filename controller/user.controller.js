const db = require('../config/db.config.js')
const user = db.user
const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken');
const config = require('../config/env.js')


exports.create =(req,res)=>{
    console.log('creating user: ',req);
    user.create({
        first_name: req.body.fName,
        last_name: req.body.lName,
        email: req.body.email,
        phone_number: req.body.phone,
        user_name: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then((user)=>{
        var token = jwt.sign({name: user.first_name, _id: user.id, isAdmin: user.isAdmin},config.secret);
        res.json({success:true, token: 'JWT' + token, firstName: user.first_name, userId: user.id, isAdmin: user.isAdmin})
    }).catch((err)=>{
        console.log('invalid user')
        res.status(501).send({ success: false, msg:'can not enter Event into DB'})
    })
}

exports.findAll = (req, res)=>{
    user.findAll().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not final all users in DB'})
    })
}

// WE ARE GOING TO USE THE BOTTOM CODE BUT NEED TO PUT AND GET THE JWT TOKEN FROM THE HEADERS OR FROM THE REDUX STORE. THIS ROUTE NEEDS TO BE PROTECTED. WILL USE (JWT.VERIFY) TO CHECK VALIDITY OF TOKEN AND CHECK IF isAdmin boolean is true || false. 

// exports.findAll = (req, res) => {
//     var token = req.body.token || req.query.token || getToken(req.headers)
//     console.log('parced authorization token:', token)
//     console.log('req.header:', req.headers)
//     jwt.verify(token, config.secret, (err, user) => {
//         console.log(user)
//         if (err) {
//             res.status(401).send({ success: false, msg: 'Please provide a valid token' })
//         } else if (user.isAdmin == false || user.isAdmin == null) {
//             res.status(401).send({ success: false, msg: 'Unauthorized' })
//         } else {
//             User.find()
//                 .then((users) => {
//                     res.json(users)
//                 }).catch((err) => {
//                     res.status(404).send({ error: 'could not retrieve user' })
//                 })
//         }
//     })
// }


exports.findById = (req, res) => {	
    user.findById(req.params.userId).then((user) => {
		res.json(user);
	}).catch((err)=>{
        res.send(501).send({success: false, msg:'could not retrieve user'})
    })
};

exports.delete = (req,res)=>{
    const id = req.params.userId
    user.destroy({
        where:{id:id}
    }).then(deleteUser =>{
        res.status(200).send({success: true, msg:`user id: ${id} was successfully deleted`})
    }).catch((err)=>{
        res.status(401).send({ success: false, msg: 'error could not remove user from DB' })
    })
}

exports.update = (req, res) => {
  const id = req.params.userId;
	user.update( { 
        first_name: req.body.fName,
        last_name: req.body.lName,
        email: req.body.email,
        phone_number: req.body.phone,
        user_name: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
         }, 
        { where: {id: id} }
	).then(() => {
		res.status(200).send("updated successfully a customer with id = " + id);
	});
};

exports.signin =(req, res)=>{
   user.findOne({ where:{email:req.body.email}
}).then(user=>{
    if(!user){
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'})
    }
    if(user){
        let hash = user.password
        console.log(hash)
        bcrypt.compare(req.body.password, hash, (err, result)=>{
            if (result){
                var token = jwt.sign({name: user.first_name, _id: user.id, isAdmin: user.isAdmin}, config.secret);
                console.log(token)
                res.json({success:true, token: 'JWT' + token})
            }else{
                res.status(401).send({sucess:false, msg: 'Authentication failed. Wrong password'})
            }
        })
    }
})

}

// HELPER FUNCTION FOR THE FINDALL FUNCTION
getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
