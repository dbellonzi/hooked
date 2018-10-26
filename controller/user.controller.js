const db = require('../config/db.config.js')
const user = db.user
const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken');
const config = require('../config/env.js')
var crypto = require('crypto');
var async = require('async');
var nodemailer = require('nodemailer')
var decoded = require('jwt-decode');


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
        res.json({success:true, token:token, firstName: user.first_name, userId: user.id, isAdmin: user.isAdmin})
    }).catch((err)=>{
        console.log('invalid user')
        res.status(501).send({ success: false, msg:'can not enter Event into DB'})
    })
}

// exports.findAll = (req, res)=>{
//     user.findAll().then((user)=>{
//         res.json(user)
//     }).catch((err)=>{
//         res.status(501).send({ success: false, msg:'can not final all users in DB'})
//     })
// }

// WE ARE GOING TO USE THE BOTTOM CODE BUT NEED TO PUT AND GET THE JWT TOKEN FROM THE HEADERS OR FROM THE REDUX STORE. THIS ROUTE NEEDS TO BE PROTECTED. WILL USE (JWT.VERIFY) TO CHECK VALIDITY OF TOKEN AND CHECK IF isAdmin boolean is true || false. 

exports.findAll = (req, res) => {
    var token = req.body.token || req.query.token || getToken(req.headers)
    console.log('parced authorization token:', token)
    console.log('req.header:', req.headers)
    jwt.verify(token, config.secret, (err, result) => {
        console.log(result)
        if (err) {
            res.status(401).send({ success: false, msg: 'Please provide a valid token' })
        } else if (result.isAdmin == false || result.isAdmin == null) {
            res.status(401).send({ success: false, msg: 'Unauthorized' })
        } else {
            db.user.findAll().then((users) => {
                    res.json(users)
                }).catch((err) => {
                    res.status(404).send({ error: 'could not retrieve user' })
                })
        }
    })
}

exports.reset = (req, res, next) => {
    async.waterfall([
        function (done) {
            crypto.randomBytes(20, function (err, buf) {
                var token = buf.toString('hex');
                console.log("CRYPTO TOKEN:",token)
                done(err, token);
            });
        },
        function (token, done){
            user.findOne({ where: {email: req.body.email }}, (err) => {
                if (err) throw err
            }).then((user) => {
                if (!user) {
                    res.status(501).send({ success: false, msg: 'Email not found. Please enter a valid email.'})
                } else{
                console.log("this is the user", user)
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
                user.save();
                 
                }
                done(token, user);
                console.log("reset token:", token)
                console.log("reset user", user.first_name) 
                // user.save((err) => {
                //     done(err, token, user)
                //     res.json(user)
                // });
            });
        },
        function (token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'SendGrid',
                auth: {
                    user: 'khoacn',
                    pass: 'Noodleboy_79'
                }
            });

            var mailOptions = {
                to: user.email,
                from: 'passwordreset@hooked.com',
                subject: 'Hooked Password Reset',
                text: user.first_name +' , '+ 
                    'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n',
            };
            smtpTransport.sendMail(mailOptions, function (err) {
                done(err, 'done');
            });
        }
    ], function (err) {
        if (err) return next(err);
        // res.redirect('/reset-password');
    });
};

exports.resetconfirm = (req, res) =>{
    getAuthToken = function() {
        if(req.headers.referer){
            var parted =req.headers.referer.split('/')
            return parted [4]
        }else{
            return null 
        }
    }
    var token = getAuthToken(req.headers.referer)
    // pulls the token from the req.headers.referer. Split it at / and return the part [4] which is the token
    async.waterfall([
        function(done) {
          user.findOne({ resetPasswordToken: token},(err, user)=> {
            if (err) throw err
            if (!user) {
                res.status(501).send({ success: false, msg: 'Password reset token is invalid or has expired.' })
            }
            console.log(user)
            user.password = bcrypt.hashSync(req.body.password, 10)
            console.log("req.body.password:",req.body.password)
            console.log("Encrypted user passsword:",user.password)
            // user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            user.save(err=>{
                if(err) throw err
                done(err, user)
            })
          }).then(user=>{
              res.json(user)
          });
        },
        function(user, done) {
          var smtpTransport = nodemailer.createTransport({
            service: 'SendGrid',
            auth: {
              user: 'user credentials',
              pass: 'password credientals'
            }
          });
          var mailOptions = {
            to: user.email,
            from: 'admin@hooked.com',
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' +  
              'This is a confirmation that the password for your account ' + user.email + ' has just been changed at nyjahwood.com. Please contact our support staff if is any issue. Thank you. \n'
          };
          smtpTransport.sendMail(mailOptions,(err)=>{
            done(err);
          });
        }
      ], function(err) {
         if(err) throw err
      });
}
// TAKES THE PASSWORD FROM THE REQ.PARAMS.TOKEN AND CHECKS IT AGAINST THE RESETPASSWORD TOKEN THAT WAS CREATED TO MAKE. STILL NEED TO MAKE SURE IT CHECKS FOR THE RESETPASSWORD EXPIRES FIELD. 

exports.reset_password = (req, res) => {
    console.log(req.params)
    User.findOne({
        resetPasswordToken: req.params.token,
        // resetPasswordExpires: { $gt: Date.now()}
    }, (err, user) => {
        if (err) throw err
        if (!user || user.resetPasswordExpires < Date.now()) {
            res.status(401).send({ success: false, msg: 'Password reset token is invalid or has expired please try again' })
        }
    }).then(user => {
        res.json(user)
    })
}


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
    console.log(user)
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
                res.json({success:true, token: token,user: user})
            }else{
                res.status(401).send({success:false, msg: 'Authentication failed. Wrong password'})
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
