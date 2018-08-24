// import mongoose module
const mongoose = require('mongoose');

// create a schema with integrity checks
const taskSchema = mongoose.Schema({
    task:  {
        name:       String,
        required:   true
    },
    isChecked:      false,
    createdTime:    Date,
    isUpdated:      false,
    updatedTime:    Date
});

// create a model on Tasks
const Tasks = mongoose.model('Tasks', taskSchema);

// export Task model to global
module.exports = Tasks;