var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose.js');
var routes_loader = require('./server/config/routes.js');
routes_loader(app);

app.listen(3000, function(){
  console.log('listening port 3000.....');
})
