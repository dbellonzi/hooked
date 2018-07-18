const express = require ('express')
const app = express ()
const session = require ('express-session')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build/")));
app.use(require('./routes/routes.js'))


app.all("*", (req, res) => {
  res.sendFile(path.resolve("../client/build/index.html"));
});
// resolves all paths to index.hmtl


app.use(session({secret:"keyboard cat", resave: false, saveUninitialized:true, cookie: {maxAge:6000}}));
//create a server side session key
app.listen(port, ()=> console.log(`Listening on port ${port}`))