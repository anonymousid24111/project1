var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controllers/product.controller');

var port = 3000;
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/search', controller.search);
app.post('/signup', controller.signup);
app.post('/login', controller.login);
// app.get('/logout', controller.signup);
// app.get('/signup', controller.signup);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});


