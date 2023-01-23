const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    // Commented Below would be a validated version, that would be set for the form!
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [6, "Title must be at least 6 characters long"],
    },
    price: {
        type: Number,
        min: [1, "Everything has a price, certainly this must cost at least 1 dollar?"]
    }, 
    description: {
        type: String,
        required: false,
        minlength: [3, "Description must be at least 3 characters long"]
    } 
    // title: String,
    // price: Number,
    // description: String,
}, {timestamps: true})

module.exports = mongoose.model("Project", ProjectSchema);