const db = require('../config/db.config.js')
const user = db.user
const bcrypt = require('bcrypt')
const passport = require('passport')

exports.create =(req,res)=>{
    console.log(req.body);
    user.create({
        first_name: req.body.fName,
        last_name: req.body.lName,
        email: req.body.email,
        phone_number: req.body.phone,
        user_name: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
        // password: req.body.password,
    }). then((user)=>{
        res.redirect('/')
    }). catch((err)=>{
        res.status(501).send({
            error: "could not add new user to the database"
        })
    })
}

// exports.create =(req,res)=>{
//     User.findOne({
//         where: {
//          email: req.body.email
//         }
//       }).then((user)=>{
//         if(!user){
//           User.create({
//             first_name: req.body.fName,
//             last_name: req.body.lName,
//             email: req.body.email,
//             phone_number: req.body.phone,
//             user_name: req.body.username,
//             password: bcrypt.hashSync(req.body.password, 10)
//           }).then((user)=>{
//             passport.authenticate('local', {
//                 failureRedirect:'/register', 
//                 successRedirect: '/'})
//           })
//         } else {
//           res.send("user exists")
//         }
//       })
// }


exports.findAll = (req, res)=>{
    user.findAll(). then((user)=>{
        res.json(user)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve Users'})
    })
}

exports.findById = (req, res) => {	
    user.findById(req.params.userId).then((user) => {
		res.json(user);
	}).catch((err)=>{
        res.send(500).send({error:'could not retrieve user'})
    })
};

exports.delete = (req,res)=>{
    const id = req.params.userId
    user.destroy({
        where:{id:id}
    }).then(deleteUser =>{
        res.send(`user ${id} has been deleted`)
    }).catch((err)=>{
        res.send(500).send({error:'could not delete User'})
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