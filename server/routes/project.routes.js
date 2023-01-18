const ProjectController = require('../controllers/project.controller');

module.exports = app => {
    app.get('/api/project', ProjectController.findAll);
    app.post('/api/project', ProjectController.createProject);
}