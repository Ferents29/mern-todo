const { Schema, model} = require("mongoose");

const schema = new Schema({
    date: String,
    title: String,
})

module.exports = model('CalendarEvents', schema);