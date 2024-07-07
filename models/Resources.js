const { Schema, model} = require("mongoose");

const schema = new Schema({
    name: String,
    age: String,
    address: String,
    location: String,
    remote: Boolean,
    technologies: Array,
    projects: Array,
    techLevel: String,
    engLevel: String,
    facebookLink: String,
})

module.exports = model('Resources', schema);