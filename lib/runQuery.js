'use strict';

const runQuery = function(sql, callback = function() {}) {
    return new Promise((resolve, reject) => {
        let err = null;
        
        if (!sql) {
            err = { message: 'No sql query string given' };
            reject(err);
            return callback(err);
        } else if (typeof sql === "function") {
            err = { message: 'No sql query string given' };
            reject(err);
            return sql(err);
        } else if (!this._connection) {
            err = { message: 'No active connection, run connect first' };
            reject(err);
            return callback(err);
        }
    
        this._connection.query(sql, (err, rows) => {
            if (err) {
                reject(err);
                return callback(err);
            }
            resolve(rows);
            return callback(null, rows);
        });
    });
};

module.exports = runQuery;