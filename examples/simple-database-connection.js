'use strict';

const simple_mysql_wrapper = require('simple-mysql-wrapper');

let anyDatabase = new simple_mysql_wrapper({
    host: '127.0.0.1',
    port: 3306,
    user: 'db_user',
    password: 'db_password',
    database: 'db_database',
    connectTimeout: 10000  // milliseconds
});

anyDatabase.connect((err) => {
    if(err) console.log(err.message);
    else {
        // Connection to database was successfully, run any query now
        anyDatabase.runQuery('SELECT * FROM users', (err, rows) => {
            if(err) console.log(err.message);
            else console.log(rows);

            // Don't forget to disconnect from database when you are ready
            anyDatabase.disconnect((err) => {
                if(err) console.log(err.message);
                else console.log('Now we are disconnected')
            })
        });
    }
});