# simple-mysql-wrapper

[![npm](https://img.shields.io/badge/npm-v2.13.0-blue.svg)]()
[![npm](https://img.shields.io/badge/node-v0.6.0-green.svg)](https://nodejs.org/en/download/)

## Table of Contents
- [Introduction](#introduction)
- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
  - [anyDatabase.connect(callback)](#anydatabaseconnectcallback)
  - [anyDatabase.runQuery(sql, callback)](#anydatabaserunquerysql-callback)
  - [anyDatabase.disconnect(callback)](#anydatabasedisconnectcallback)
- [Examples](#examples)


## Introduction

This is a node.js wrapper module for the [mysql](https://github.com/mysqljs/mysql) node module, it's written in JavaScript.

But why this module? <br />
This module helps me to create / handle very easy more than one database connection with core features implementation.

## Install

The module is currently only available on github, so use the following command to install:

```sh
$ npm install https://github.com/MoonLiightz/simple-mysql-wrapper/archive/v0.1.1.tar.gz --save
```

## Usage

```js
const mysql_helper = require('simple-mysql-wrapper');

let anyDatabase = new mysql_helper({
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
```

## Methods

There are only three methods.

### anyDatabase.connect(callback)

Start trying to connect to the database.

##### callback

```js
function(err)
```
Callback of mysql connect

### anyDatabase.runQuery(sql, callback)

Execute an mysql query

##### sql

```js
String
```
SQL string of the query

##### callback

```js
function(err, rows)
```
Callback of mysql query

### anyDatabase.disconnect(callback)

Close the database connection.

##### callback

```js
function(err)
```
Callback of mysql disconnect

## Examples

- You find some examples here: [simple-mysql-wrapper/examples/](https://github.com/MoonLiightz/simple-mysql-wrapper/tree/master/examples) 
- For more details about the configuration or anything else look at the original [mysql](https://github.com/mysqljs/mysql) module.
