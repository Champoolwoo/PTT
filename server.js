var mysql = require('mysql')
var express = require('express')
//var http = require('http')

var app = express()
app.use(express.static('public'))

var con = mysql.createConnection({

  host : '127.0.0.1',
  port : '8889',
  user : 'root',
  password : 'root',
  database : 'ptt'

})// Connect Database

con.connect()

app.get('/carpark', function(req, res){

  var sql = 'select * from carpark'
  var query = con.query(sql,function (err, results){

    if(err) throw err
    console.log(results)
    res.json(results)

  })

})

app.listen(3306)
console.log('Running On Port 3306')

