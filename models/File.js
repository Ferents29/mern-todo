const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    name: { type: String },
    type: { type: String },
    size: { type: Number },
    path: { type: String },
    parent: { type: Number },
    user: {type: Types.ObjectId, ref: "Users"},
})

module.exports = model('File', schema);