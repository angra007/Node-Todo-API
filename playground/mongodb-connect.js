//const MongoClient = require ('mongodb').MongoClient
const {MongoClient, ObjectID} = require ('mongodb');

var user = {
    name : 'Ankit',
    age : 26
}

var {name} = user;
console.log (name);

// MongoClient.connect ('mongodb://localhost:27017/TodoApp', (error, db) => {
//     if (error) {
//         return console.log (`Unable to connect to DB ${error}`)
//     }
//     else {
//         console.log ('Connected to MongoDB server');
        
//         db.collection ('Todos').insertOne ({
//             text : 'Something to todo',
//             completed : false
//         }, (error, result) => {
//             if (error) {
//                 return console.log ('Unable to insert todo');
//             }
//             else {
//                 console.log (JSON.stringify (result.ops, undefined, 2));
//             }
//         })


//         db.collection ('Users').insertOne ({
//             name : 'Ankit',
//             age : 26,
//             location : 'Windsor'
//         }, (error, result) => {
//             if (error) {
//                 return console.log ('Unable to insert Users');
//             }
//             console.log (JSON.stringify (result.ops, undefined, 2));
//         })

//     }

//     db.close ();
// });