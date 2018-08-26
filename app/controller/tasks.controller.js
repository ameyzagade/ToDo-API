// CONTROLLER TO QUERY ON DATABASE

// import model from sibling directory
const Tasks = require('../models/tasks.model.js');


// create task and save
const create = (req, res) =>    {

    // validate request
    if (!req.body)  {
        return res.status(400).json({
            message:    'Task body cannot be empty'
        });
    }

    // create task
    const task = new Tasks({
        task:       req.body.taskname,
        checked:    req.body.checked,
    });

    // save task to database
    task.save()
    .then(data =>   {
      res.status(201).json({                      // resource created response
            message:    'Task added successfully!',
            task:       data
        });
    }).catch(err => {
        res.status(500).json({
            message:    err.message || 'Some error occured while creating the task!'
        });
    });
}


// retrieve all tasks
const findAll = (req, res) =>   {

    Tasks.find()
    .then(allTasks =>   {
        res.send(allTasks);                         // send all tasks as json response
    }).catch(err => {
        res.status(500).json({
            message:    err.message || 'Some error occured while retrieving the tasks!'
        });
    });
}


// update task with ID and name
const update = (req, res) =>    {
    
    // validate request
    if (!req.body.content)  {
        return res.status(400).json({
            message:    'Task body cannot be empty'
        });
    }

    Tasks.findOneAndUpdate({taskID: req.params.taskID}, {$set: {task: {name: req.params.task}}}, {new: true}, err, (err, doc) => {
        if (err)    {
            if (err.kind === 'ObjectId')    {       // if type is ID, but ID doesn't exist
                return res.status(404).json({
                    message:    'Task with id ' + req.params.taskID + ' not found!'
                });
            }

            return res.status(500).json({
                message:    err.message || 'Some error occured while updating the task!'
            });
        }

        res.status(200).json({
            message:    'Task updated!'
        });
    });
}


// delete task with ID
const del = (req, res) =>   {

    Tasks.findOneAndDelete({taskID: req.params.taskID}, (err, doc) =>   {
        if (err)    {
            if (err.kind === 'ObjectId')    {
                return res.status(404).json({
                    message:    'Task with id ' + req.params.taskID + ' not found!'
                });
            }
    
            return res.status(500).json({
                message:    err.message || 'Some error occured while deleting the task!'
            });
        }

        return res.status(200).json({
            message:    'Task with id ' + req.params.taskID + ' deleted successfully!'
        });
    });
}

module.exports = {
    create, findAll, update, del
}