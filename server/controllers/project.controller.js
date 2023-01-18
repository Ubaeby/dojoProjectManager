const Project = require('../models/project.model')

module.exports = {
    findAll: (req, res) => {
        Project.find()
            .then(allProjects => res.json(allProjects))
            .catch(err => res.json({message: "Something went wrong in getting all projects", error: err}))
    },
    createProject: (req, res) => {
        Project.create(req.body)
            .then(newProject => res.json(newProject))
            .catch(err => res.json({message: "Something went wrong creating a project", error: err}))
    }

}