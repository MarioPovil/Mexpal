const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root', 
    password:'mario100',
    database:'mexpal'
});
mysqlConnection.connect(err=>{
    if(err){
        console.log('Error en db: ', err);
        return;
    }else{
        console.log('DB ok!')
    }
});
module.exports=mysqlConnection;