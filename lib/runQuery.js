'use strict';

const runQuery = function(sql, callback = function() {}) {
    if(!sql) return callback({message: 'No sql query string given'});
    if(typeof sql === "function") return sql({message: 'No sql query string given'});
    if(!this._connection) return callback({message: 'No active connection, run connect first'});

    this._connection.query(sql, (err, rows) => {
        if(err) return callback(err);
        return callback(null, rows);
    })
};

module.exports = runQuery;