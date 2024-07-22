const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    title: { type: String },
    file: { type: Buffer },
    createdAt: { type: Date, default: Date.now },
    author: { type: Types.ObjectId, ref: 'Users' },
})

module.exports = model('Documents', schema);