const db = require('../config/db.config.js')
const user = db.user
const bcrypt = require('bcrypt')
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
        var token = jwt.sign({name: user.first_name, _id: user.id, isAdmin: user.isAdmin},process.env.SECRET, {expiresIn:  "24h" });
        res.json({success:true, token:token, firstName: user.first_name, userId: user.id, isAdmin: user.isAdmin})
    }).catch((err)=>{
        console.log('invalid user')
        res.status(501).send({ success: false, msg:'can not enter User into DB'})
    })
}

// WE ARE GOING TO USE THE BOTTOM CODE BUT NEED TO PUT AND GET THE JWT TOKEN FROM THE HEADERS OR FROM THE REDUX STORE. THIS ROUTE NEEDS TO BE PROTECTED. WILL USE (JWT.VERIFY) TO CHECK VALIDITY OF TOKEN AND CHECK IF isAdmin boolean is true || false. 

exports.findAll = (req, res) => {
    var token = getToken(req.headers)
    console.log('parced authorization token:', token)
    jwt.verify(token, process.env.SECRET, (err, result) => {
        console.log(result)
        if (err) {
            res.status(401).send({ success: false, msg: 'Please provide a valid token' })
        } else if (result.isAdmin == false || result.isAdmin == null) {
            res.status(401).send({ success: false, msg: 'Unauthorized' })
        } else {
            db.user.findAll().then((users) => {
                    res.json(users)
                }).catch((err) => {
                    res.status(404).send({ error: 'could not retrieve users' })
                })
        }
    })
}



exports.reset = (req, res, next) => {
    async.waterfall([
        // function (done) {
        //     crypto.randomBytes(20, function (err, buf) {
        //         var token = buf.toString('hex');
        //         console.log(token)
        //         done(null, token);
        //     });
        // },
        function(done){
           var token = jwt.sign({name: 'user'}, process.env.SECRET, {expiresIn:'24h'})
           console.log(token)
           done(null, token)
        },
        function (token, done) {
            user.findOne({ where: {email: req.body.email }}, (err) => {
                if (err) throw err
            }).then((user) => {
                if (!user) {
                    res.status(501).send({ success: false, msg: 'Email not found. Please enter a valid email.'})
                } else {
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour  
                res.json(user)
                }
                user.save().then(function(err){
                    done(null, token, user)
                })
            })
        },
        function (token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'SendGrid',
                auth: {
                    user: process.env.USER_NAME,
                    pass: process.env.CREDENTIALS
                }
            });

            var mailOptions = {
                to: user.email,
                from: 'Admin@hooked.com',
                subject: 'Admin Password Reset',
                // text: user.first_name +' , '+ 
                //     'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                //     'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                //     'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                //     'If you did not request this, please ignore this email and your password will remain unchanged.\n',
                html: user.first_name +
                      '<p>you are receiving this because you (or someone else) has requested the reset of the password for your account at Hooked.  Please click on the following link or paste this into your browser to complete the process</p>' + 
                      'http://' + req.headers.host + '/reset/' + token  +
                      '<p>If you did not request this, please ignore this email and your password will remain unchanged</p>' +
                      '<p>Hooked IT team</p>'
            };
            smtpTransport.sendMail(mailOptions, function (err) {
                done(err, 'done');
            });
        }
    ], function (err) {
        if (err) return next(err);
        res.redirect('/login');
    });
};

exports.resetconfirm = (req, res) =>{
    async.waterfall([
        function(done) {
          user.findOne({where:{ resetPasswordToken: req.params.token}},(err)=> {
            if (err) throw err
          }).then(user=>{
            if (!user) {
                res.status(501).send({ success: false, msg: 'Password reset token is invalid or has expired.' })
            } else{
            user.password = bcrypt.hashSync(req.body.password, 10)
            user.resetPasswordToken = null;
            user.resetPasswordExpires = null;
            res.json(user)
            }
            user.save().then(()=>{
                done(null, user)
            })
          });
        },
        function(user, done) {
          var smtpTransport = nodemailer.createTransport({
            service: 'SendGrid',
            auth: {
                user: process.env.USER_NAME,
                pass: process.env.CREDENTIALS
            }
          });
          var mailOptions = {
            to: user.email,
            from: 'admin@hooked.com',
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' +  
              'This is a confirmation that the password for your account ' + user.email + ' has just been changed at hooked.com. Please contact our support staff if is any issue. Thank you. \n'
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
    console.log('this is the req params',req.params)
    user.findOne({
        where:{resetPasswordToken: req.params.token,}
    }, (err) => {
        if(err) throw err
    }).then(user => {
        if (!user || user.resetPasswordExpires <= Date.now()) {
            res.status(401).send({ success: false, msg: 'Password reset token is invalid or has expired please try again' })
        } else{
            res.json(user)
        }
    })
}

exports.findById = (req, res) => {	
    user.findById(req.params.userId).then((user) => {
		res.json(user);
	}).catch((err)=>{
        res.send(501).send({success: false, msg:'could not retrieve user'})
    })
};


// Added authorization. Only admin is able to delete any user
exports.delete = (req,res)=>{
    var token = getToken(req.headers)
    jwt.verify(token, process.env.SECRET, (err, result)=>{
        console.log('result from delete', result)
        if (err) {
            res.status(401).send({ success: false, msg: 'Please provide a valid token' })
        } else if (result.isAdmin == false || result.isAdmin == null) {
            res.status(401).send({ success: false, msg: 'Unauthorized' })
        }else{
            const id = req.params.userId
            user.destroy({
                where:{id:id}
            }).then(deleteUser =>{
                res.status(200).send({success: true, msg:`user id: ${id} was successfully deleted`})
            }).catch((err)=>{
                res.status(401).send({ success: false, msg: 'error could not remove user from DB' })
            })
        }
    })
    // const id = req.params.userId
    // user.destroy({
    //     where:{id:id}
    // }).then(deleteUser =>{
    //     res.status(200).send({success: true, msg:`user id: ${id} was successfully deleted`})
    // }).catch((err)=>{
    //     res.status(401).send({ success: false, msg: 'error could not remove user from DB' })
    // })
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
                var token = jwt.sign({name: user.first_name, _id: user.id, isAdmin: user.isAdmin}, process.env.SECRET, {expiresIn:  "24h" });
                res.json({success:true, token: token, user: user})
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
