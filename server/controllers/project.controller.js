const Project = require('../models/project.model')

module.exports = {
    findAll: (req, res) => {
        Project.find()
            .then(allProjects => res.json(allProjects))
            .catch(err => res.status(400).json({message: "Something went wrong in getting all projects", error: err}))
    },
    createProject: (req, res) => {
        Project.create(req.body)
            .then(newProject => res.json(newProject))
            .catch(err => res.status(400).json({message: "Something went wrong creating a project", error: err}))
    },
    findOne: (req, res) => {
        Project.findOne({_id:req.params.id})
            .then(oneProject => res.json(oneProject))
            .catch(err => res.status(400).json(err))
    },

    updateProject: (req, res) => {
        Project.findByIdAndUpdate((req.params.id), req.body, {new:true, runValidators:true})
            .then(updatedPerson => res.json(updatedPerson))
            .catch(err => res.status(400).json({message: "Something went wrong updating a project", error: err}))
    },

    deleteProject: (req,res) => {
        Project.deleteOne({_id:req.params.id})
            .then(deleter => res.json(deleter))
            .catch(err => res.json(err));
    }
}