'use strict';

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'alej',
    password: '123456',
    database: 'BD_Express_2026',
    port:3307
});

conexion.connect(function(err){
    if(err) 
        throw err;
    console.log('Conexion a BD con EXITO!!!');

});
module.exports = conexion;