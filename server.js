const express = require ('express')
const app = express ()
const mysql = require('mysql');
const session = require ('express-session')
// var path = require('path')


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

app.use(session({secret:asdertyuio1234fcgvhj2, resave: false, saveUninitialized:true}));
app.get('/', (req, res) => res.send('Hello World'))

app.listen(3000, ()=> console.log('connection was successful'))