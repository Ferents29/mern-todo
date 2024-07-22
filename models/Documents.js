const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    owner: {type: Types.ObjectId, ref: "User"},
    text: String,
    completed: Boolean,
    important: Boolean,
    counter: Number,
})

module.exports = model('Todo', schema);