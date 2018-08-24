// import model from sibling directory
const Tasks = require('../model/tasks.model.js');

// define controller for creating a task
const createTask = (req, res) =>    {
    // validate request
    if(!req.body.content)   {
        return res.status(400).send({
            message: 'Task cannot be empty!'
        });
    }

    // create new task
    const newTask = Tasks({
        // received from post request body 
        name:           req.body.taskname,
        isChecked:      req.body.ischecked,
        createdTime:    req.body.createdtime,
        isUpdated:      req.body.isupdated,
        updatedTime:    req.body.updatedtime
    });

    // save new task
    newTask.save()
    .then({

    }).catch(err => {
        // failure in saving to database
    });
}



module.exports = {
    createTask,
}