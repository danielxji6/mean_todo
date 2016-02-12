/*
* server.js
*/

// require express and other modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todo = require('./models/todo');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');

/*
* API routes
*/

app.get('/api/todos', function (req, res) {
  Todo.find(function (err, todos) {
    if (err) {return res.status(500).json({ error: err.message });}
    res.json(todos);
  });
});

app.post('/api/todos', function (req, res) {

});

app.get('/api/todos/:id', function (req, res) {

});

app.put('/api/todos/:id', function (req, res) {

});

app.delete('/api/todos/:id', function (req, res) {

});

app.get('/*', function(req,res){
  res.render('index');
});

// listen on port 3000
app.listen(3000, function() {
  console.log('express server started :3000');
});
