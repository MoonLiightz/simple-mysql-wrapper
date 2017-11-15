'use strict';

const disconnect = function(callback = function() {}) {
    return new Promise((resolve, reject) => {
        this._connection.end((err) => {
            if (err) {
                reject(err);
                return callback(err);
            }
            resolve();
            return callback(null);
        });
    });
};

module.exports = disconnect;