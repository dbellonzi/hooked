const express = require ('express')
const app = express ()
const path = require('path')
const passport = require('passport')
const Localstrategy = require('passport-local').Strategy
const session = require ('express-session')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const db = require('./config/db.config')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  secret:"keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:6000}
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "client/build/")));
app.use(require('./routes/routes.js'))

// passport.use(new Localstrategy ((username, pass, cb)=>{
//   var hashedPass = bcrypt.hashSync(pass,10)
//   db.user.findOne({
//     where: {
//       user_name: username
//     }
//   }).then(function(user, err){
//     if (err) { return cb(err); }
//     if (!user) { 
//     return cb(null, false); }
//     if (!bcrypt.compareSync(pass, user.password)){ 
//       return cb(null, false); }
//     return cb(null, user);
//   })
// }))

// passport.serializeUser((user, cb)=>{
//   cb(null, user.id);
// });

// passport.deserializeUser((id, cb)=> {
//   db.user.findById(id).then((user)=>{
//     cb(null, user);
//   });
// });

app.all("*", (req, res) => {
  res.sendFile(path.resolve("../client/build/index.html"));
});
// resolves all paths to index.hmtl

app.listen(port, ()=> console.log(`Listening on port ${port}`))

