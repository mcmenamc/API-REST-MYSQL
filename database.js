const mysql = require('mysql');

const mysqlConnection= mysql.createConnection({
    host: 'beukb1hcnd5kkjm6r1w0-mysql.services.clever-cloud.com',
    user: 'utizkl7370qg2j8h',
    password: 'sX5YhDtFtbBPzvfqgwyh',
    database: 'beukb1hcnd5kkjm6r1w0'
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('La base de datos a sido conectada Correctamente');
    else
    console.log('DB connection failed \n Error : '+ JSON.stringify(err,undefined,2));
});

module.exports = mysqlConnection;