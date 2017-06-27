'use strict';

const simple_mysql_wrapper = function(config) {
    this._config = config;
    this._connection = null;
    this.connect = require('./lib/connect').bind(this);
    this.runQuery = require('./lib/runQuery').bind(this);
    this.disconnect = require('./lib/disconnect').bind(this);
    return this;
};

module.exports = simple_mysql_wrapper;