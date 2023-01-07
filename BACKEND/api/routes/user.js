const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt= require('jsonwebtoken');
const { json } = require('express');

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})
router.post('/SignIn', (req,res)=>{
    const Role='passante';
    const {Username,Email, Password} = req.body;
    mysqlConnection.query('INSERT INTO user ( Username, Email, Password, Role) VALUES (?,?,?,?)', 
    [Username,Email, Password, Role], (err,rows,fields)=>{
        if(!err){
            if(rows.length >0){
                let data = JSON.stringify(rows[0]);
                const token = jwt.sign(data, 'povil');
                res.json({token});
        }}else{
            res.json('Something went wrong...');
        }
    });
})
router.post('/', (req,res)=>{
     const {Username, Password }= req.body;
    mysqlConnection.query('SELECT Username, Password, Role FROM user WHERE Username=? and Password=?', [Username, Password], (err,rows,fields)=>{
        if(!err){
            if(rows.length >0){
                
            } else{
            res.json('Usuario o clave incorrecto')
        }
    } else{
            console.log(err)
     }
    });
})
router.post('/test', verifyToken,(req,res)=>{
    res.json('Información');
})
////// MIDDELWARE /////////
function verifyToken(req,res,next){
    if(!req.headers.authorization) return res.status(401).json('No autorizado');
    const token = req.headers.authorization.substr(7);
    if(token !==''){
        const content = jwt.verify(token,'povil');
        req.data = content;
        next();
    }else{
        res.status(401).json('token wrong');
    }
}
module.exports=router;