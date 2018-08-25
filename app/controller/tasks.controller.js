// CONTROLLER TO QUERY ON DATABASE

// import model from sibling directory
const Tasks = require('../models/tasks.model.js');


// create task and save
const create = (req, res) =>    {

    // validate request
    if (!req.body.content)  {
        res.type('json');

        return res.status(400).send({
            message:    'Task body cannot be empty'
        });
    }

    // create task
    const task = new Tasks({
        task:   {
            name:   req.body.task.name
        },
        checked:    req.body.checked,
    });

    // save task to database
    task.save()
    .then(data =>   {
        res.type('json');

        res.status(201).send({                      // resource created response
            message:    'Task added!',
        });
    }).catch(err => {
        res.type('json');

        res.status(500).send({
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
        res.type('json');

        res.status(500).send({
            message:    err.message || 'Some error occured while retrieving the tasks!'
        });
    });
}


// update task with ID and name
const update = (req, res) =>    {
    
    // validate request
    if (!req.body.content)  {

        res.type('json');

        return res.status(400).send({
            message:    'Task body cannot be empty'
        });
    }

    Tasks.findOneAndUpdate({taskID: req.params.taskID}, {$set: {task: {name: req.params.task}}}, {new: true}, err, (err, doc) => {
        if (err)    {
            res.type('json');

            if (err.kind === 'ObjectId')    {       // if type is ID, but ID doesn't exist
                return res.status(404).send({
                    message:    'Task with id ' + req.params.taskID + ' not found!'
                });
            }

            res.type('json');

            return res.status(500).send({
                message:    err.message || 'Some error occured while updating the task!'
            });
        }

        res.type('json');                           // send task as response, if modified

        res.status(200).send({
            message:    'Task updated!'
        });
    });
}


// delete task with ID
const del = (req, res) =>   {

    Tasks.findOneAndDelete({taskID: req.params.taskID}, (err, doc) =>   {
        if (err)    {
            if (err.kind === 'ObjectId')    {
                res.type('json');
    
                return res.status(404).send({
                    message:    'Task with id ' + req.params.taskID + ' not found!'
                });
            }
    
            return res.status(500).send({
                message:    err.message || 'Some error occured while deleting the task!'
            });
        }

        return res.status(200).send({
            message:    'Task with id ' + req.params.taskID + ' deleted successfully!'
        });
    });
}

module.exports = {
    create, findAll, update, del
}