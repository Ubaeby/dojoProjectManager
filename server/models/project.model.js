const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
}, {timestamps: true})

module.exports = mongoose.model("Project", ProjectSchema);