const mysql = require('mysql');

const mysqlConnection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lupitha12#',
    database: 'company'
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('La base de datos a sido conectada Correctamente');
    else
    console.log('DB connection failed \n Error : '+ JSON.stringify(err,undefined,2));
});

module.exports = mysqlConnection;