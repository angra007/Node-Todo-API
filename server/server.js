var express = require ('express');
var bodyParser = require ('body-parser');
const {ObjectID} = require ('mongodb');

var {mongoose} = require ('./db/mongoose');
var {Todo} = require ('./models/Todo');
var {User} = require ('./models/User');

const port = process.env.PORT | 3000;
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


app.get ('/todos/:id', (req, res) => {
    var {id} = req.params;
    console.log (id);
    if (!ObjectID.isValid (id)) {
        res.status (404).send ({
            message : 'ID not valid'
        });
    }
    else {
        Todo.findById (id).then ( (result) => {
            res.send (result);
        }, (error) => {
            res.staus (400).send (error);
        })
    }
});

app.post ('/user', (req, res) => {
    

    var user = new User ({
        email : req.body.email,
        password : req.body.password
    });

    user.save ().then ( () => {
        return user.generateAuthToken ();
    }).then ((token) => {
        console.log (user);
        res.header('x-auth', token).send (user);
    }).catch ((error) => {
        res.status (400).send (error);
    });

})



app.listen (port, () => {
    console.log ('Started on port 3000');
})


module.exports = {app};


