// SETUP DATABASE CONNECTION

// require mongoose ODM
const mongoose = require('mongoose');


// URI details
let server = 'localhost';
let port = '27017';
let database = 'tasks';


// URI of local database
var uri = `mongodb://${server}:${port}/${database}`;


class Database  {
    constructor()   {
        this._connect()
    }

    _connect()  {
        // connect DB
        mongoose.connect(uri, { useNewUrlParser: true })
        .then( () =>    {
            console.log('Database connection successful!');
        }).catch(err => {
            console.error('Error connecting to the database. ' + err);
        });
    }
}


// export database config
module.exports = new Database();