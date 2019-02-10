const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    completed: Boolean,
}, {
    versionKey: false
})

module.exports = mongoose.model('todo', todoSchema);