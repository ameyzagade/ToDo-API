// ROUTES FOR API

module.exports = (app) =>  {
    // require controller to set routes.
    const tasks = require('../controller/tasks.controller.js');

    // route for creating a task 
    app.post('/tasks', tasks.create);

    // route for reading/fetching all the tasks
    app.get('/tasks/', tasks.findAll);

    // route for updating a task
    app.put('/tasks/:taskID/:task', tasks.update);

    // routing for deleting a task
    app.delete('/tasks/:taskID', tasks.del);

}