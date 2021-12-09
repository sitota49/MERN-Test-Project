const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    name: {
        type: String
    },
    date_of_birth: {
        type: Date
    },
    gender: {
        type: String
    },
    salary: {
        type: Number
    }
});

module.exports = mongoose.model('Employee', Employee);