var express = require ('express');
var bodyParser = require ('body-parser');

var {mongoose} = require ('./db/mongoose');
var {Todo} = require ('./models/Todo');
var {User} = require ('./models/User');

var app = express ();

app.use (bodyParser.json ())

app.post ('/todos', (req, res) => {
    console.log (req.body);
    var todo = new Todo ({
        text : req.body.text
    });

    todo.save ().then ( (body) => {
        console.log ('Sending response');
        res.send (body);
    }, (error) => {
        console.log ('Error response');
        res.staus (400).send (error);
    })
})

app.get ('/todos', (req, res) => {
    Todo.find ().then ( (todos) => {
        res.send ({
            todos
        })
    }, (error) => {
        res.staus (400).send (error);
    })
})


app.listen (3000, () => {
    console.log ('Started on port 3000');
})





