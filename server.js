const express = require ('express')
const app = express ();
const mysql = require('mysql');
const session = require ('express-session');
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
// var path = require('path')
app.use(express.static(path.join(__dirname, "client/build/")));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hookeddb'
})
// creates the connection to the mysql workbench database

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
//makes the connection to the mysql server 

app.all("*", (req, res) => {
  res.sendFile(path.resolve("../client/build/index.html"));
});
// resolves all paths to index.hmtl


app.use(session({secret:"keyboard cat", resave: false, saveUninitialized:true, cookie: {maxAge:6000}}));
//create a server side session key
app.listen(port, ()=> console.log(`Listening on port ${port}`))