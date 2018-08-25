// BASE SETUP
// setup database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

// tasks schema
const tasks = mongoose.Schema({
    task_name:      String,
    task_ID:        mongoose.Types.ObjectId,
    is_Checked:     false,
    created_on:     Date,
    is_updated:     false,
    updated_on:     Date
});

const Tasks = mongoose.model('tasks', tasks);

const express = require('express');


const app = express();

// hostname
const hostname = 'localhost';

// set the port to default port, or to 3000 if there's none
const port = process.env.port || 3000;



// built-in json middleware
express.json();

// setup router
let router = express.Router();

app.listen(port, hostname, () =>    {
    console.log('Server started successfully!');
});