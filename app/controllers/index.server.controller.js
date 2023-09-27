/**
 * Author: Kwok Wing Tang
 * File: index.server.controller.js
 * Date: 2023-09-27
 */
exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};
