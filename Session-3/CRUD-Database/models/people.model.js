const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PeopleSchema = new Schema({
    fname: {
        type: String, 
        required: true, 
        max: 100
    },
    salary: {
        type: Number, 
        required: true
    },
    mno: {
        type: Number, 
        required: true
    }
});

// Export the model
module.exports = mongoose.model('People', PeopleSchema);
