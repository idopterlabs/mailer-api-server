const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const sendEmail = require('./mailer');

const parser = require('body-parser');

// Sends email
app.post('/contact-us', authenticate(), parser.json(), (req, res) => {
  const { destination } = req.body;
  sendEmail(destination).then(() => {
    return res.sendStatus(201);
  });
});

const AUTH_KEY = process.env.AUTH_KEY;

// Prevents general public from using API
function authenticate(){
  return function(req, res, next){
    if(req.headers['x-auth'] !== AUTH_KEY){
      res.sendStatus(401)
      return false;
    }
    next();
  }
}

app.listen(PORT);
