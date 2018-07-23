const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect ('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log (`Unable to connect to DB ${error}`)
    }
    
    db.collection ('Todos').find ({ 
        _id :   new ObjectID ('5b5651933da63f272cc912fc')
    }).toArray ().then ( (docs) => {
        console.log ('Todos');
        console.log (JSON.stringify (docs, undefined, 2));
    }, (error) => {
        console.log ('Unable to fetch Todos')
    })
    //db.close ();
});