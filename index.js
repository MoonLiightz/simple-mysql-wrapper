'use strict';

const mysql_helper = function(config) {
    this._config = config;
    this._connection = null;
    this.connect = require('./lib/connect').bind(this);
    this.runQuery = require('./lib/runQuery').bind(this);
    this.disconnect = require('./lib/disconnect').bind(this);
    return this;
};

module.exports = mysql_helper;