var express=require('express')
var ejs = require('ejs')

var mysql=require('mysql')
mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node project",
})

var app=express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.listen(8080);

app.get('/',function(req,res)
{
    mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"node project",
    })
    confirm.query("SELECT * FROM products",(err,result)=>{
 res.render('pages/index');

})
});