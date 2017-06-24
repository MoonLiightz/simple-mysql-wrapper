'use strict';

const mysql_client = require('mysql');

const connect = function(callback = function() {}) {
    if(this._connection) return callback({message: 'Already connected'});
    if(!this._config) return callback({message: 'No mysql config given'});

    this._connection = mysql_client.createConnection(this._config);
    this._connection.connect((err) => {
        if(err) return callback(err);
        else return callback();
    })
};

module.exports = connect;