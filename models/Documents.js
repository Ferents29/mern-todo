const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})

module.exports = model('Documents', schema);