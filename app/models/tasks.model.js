// Tasks SCHEMA DEFINITION
const mongoose = require('mongoose');


// create schema 
const taskSchema = mongoose.Schema(
    {
        task:    {
            type:       String,             
            required:   true,               // required, cannot be skipped
            unique:     true,               // has to be unique
            minlength:  1,                  // cannot be blank, has to be minimum 1 letter long
        },
        checked:    {
            type:       Boolean,
            required:   true,
            default:    false,              // set explicitly, defaults to false
        }
    },
    {
        timestamps:     true                // auto update createdAt and updatedAt properties
    }
);


// export model
module.exports = mongoose.model('Tasks', taskSchema);