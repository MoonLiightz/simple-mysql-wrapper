'use strict';

const disconnect = function(callback = function() {}) {
    this._connection.end((err) => {
        if(err) return callback(err);
        return callback(null);
    });
};

module.exports = disconnect;