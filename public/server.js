var mysql = require('mysql')

var con = mysql.createConnection({

  host : "10.221.202.13",
  user : "sa",
  password : "Vmsptteeci2020",
  database : "WIN-3HRI22I2EGI\SQLEXPRESS"

})

con.cennect(function(err){
  
  if(err) throw err
  con.query("SELECT * FORM Registor", function(err, result, fields){

    if (err) throw err
    console.log (result)

  })


})