// SETUP DATABASE CONNECTION 
const mongoose = require('mongoose');

// uri details
let server = 'localhost';
let port = '27017';
let database = 'tasks';

var uri = `mongodb://${server}:${port}/${database}`;

class Database  {
    constructor()   {
        this._connect()
    }

    _connect()  {
        // connect DB
        mongoose.connect(uri, { useNewUrlParser: true })
        .then( () =>    {
            console.log('Database connection successful.');
        }).catch(err => {
            console.error('Error connecting to database.');
        });
    }
}

// export database config
module.exports = new Database();