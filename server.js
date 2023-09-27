/**
 * Author: Kwok Wing Tang
 * File: server.js
 * Date: 2023-09-27
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
