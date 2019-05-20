var express = require('express');
var exphbs  = require('express-handlebars');
var http = require('http');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  res.render('index');
})

app.get('/consumers', function (req, res) {
  res.render('consumers');
})

app.get('/professional', function (req, res) {
  res.render('professional');
})

app.listen(3000, function () {
  console.log('The Boom is listening on port 3000!');
})
