// start database connection
const Database = require('./config/database.config.js');

// require packages
const express = require('express');
const app = express();


// hostname
const hostname = 'localhost';

// set port to the default port, or to 3000 if there's none
const port = process.env.port || 3000;

// JSON middleware
express.json();

app.get('/', (req, res) =>  {
    res.json({
        "message":  "take notes easily"
    })
});

// routes for our API
require('./app/routes/tasks.routes.js')(app);

app.listen(port, hostname, () =>    {
    console.log('Server started successfully!');
});
