/**
 * Author: Kwok Wing Tang
 * File: index.server.routes.js
 * Date: 2023-09-27
 */
var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'My Services' });
});
//form handling
router.post('/submit', function(req, res, next) {
  //path to save message
  var file = "./database/messages.txt";
  console.log('First Name: ' +req.body.first_name);
  console.log('Last Name: ' +req.body.last_name);
  console.log('Contact Number: ' +req.body.contact_number);
  console.log('Email Address: ' +req.body.email_address);
  console.log('Message: ' +req.body.message);

  //process raw data to be saved
  var save_message = 'First Name: ' +req.body.first_name +","
  +'Last Name: ' +req.body.last_name +","
  +'Contact Number: ' +req.body.contact_number +","
  +'Email Address: ' +req.body.email_address +","
  +'Message: ' +req.body.message +"\n";
  
  //write data to file
  fs.appendFile(file, save_message, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved in " +file +"!");
  }); 
  res.render('submit', { title: 'Submit' });
});

module.exports = router;
