'use strict';

const mysql_client = require('mysql');

const connect = function(callback = function() {}) {
    return new Promise((resolve, reject) => {
        let err = null;
        
        if (this._connection) {
            err = { message: 'Already connected' };
            reject(err);
            return callback(err);
        } else if (!this._config) {
            err = { message: 'No mysql config given' };
            reject(err);
            return callback(err);
        }
    
        this._connection = mysql_client.createConnection(this._config);
        this._connection.connect((err) => {
            if (err) {
                reject(err);
                return callback(err);
            }
            resolve();
            return callback(null);
        });
    }); 
};

module.exports = connect;