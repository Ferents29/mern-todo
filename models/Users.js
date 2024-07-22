const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    email: {type:String, require:true, unique:true,},
    password: {type:String, require:true,},
    todos: [{type:Types.ObjectId, ref:"Todo"}],
    documents: [{type:Types.ObjectId, ref:"Documents"}],
})

module.exports = model('Users', schema);