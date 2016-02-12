// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var mongoose = require("mongoose");
var Todo = require("./models/todo");

// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');

var todoList = [];

todoList.push({
  title: "Buy milk",
  finish: true,
});
todoList.push({
  title: "Laugh",
  finish: false,
});
todoList.push({
  title: "Feed dog",
  finish: true,
});
todoList.push({
  title: "Cut tree",
  finish: false,
});

// console.log(todoList);

Todo.remove({}, function(err, todos){

  Todo.create(todoList, function(err, todos){
    if (err) { return console.log('ERROR', err); }
    // console.log("all todos:", toods);
    console.log("created", todos.length, "todos");
    process.exit();
  });

});

// Todo.create({title: "Test", finish: true}, function(err, todo){
//   if (err) { return console.log('ERROR', err); }
//   console.log("created", todo);
//   // process.exit();
// });
//
// Todo.find({}, function(err, todos){
//   if (err) { return console.log('ERROR', err); }
//   console.log(todos);
//   process.exit();
// });
