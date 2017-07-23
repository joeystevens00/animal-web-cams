var pug = require('pug');
var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.get('/', function(req, res){
  var animals = JSON.parse(fs.readFileSync('data/animals.json'));
  res.render('index', { animals: animals })
});

app.listen(3000, function () {
    console.log('listening on port', 80);
});
