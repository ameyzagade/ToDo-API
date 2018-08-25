
module.exports = (app) =>  {
    // require controller to set routes.
    const tasks = require('../controller/tasks.controller.js');

    // route for creating a task 
    app.post('/', tasks.create);

    // route for reading/fetching all the tasks
    app.get('/', tasks.findAll);

    // route for updating a task
    app.put('/:taskID/:task', tasks.update);

    // routing for deleting a task
    app.delete('/:taskID', tasks.del);
}