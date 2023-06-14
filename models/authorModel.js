const mongoose = require('mongoose');

const {Schema} = mongoose;

const authorSchema = new Schema({
    name: { type: String,
            required: true},
    surname: { type: String, 
            required: true},
    createdAt: {type:Date,
        default: () => Date.now(),
        immutable:true },
});

const model = mongoose.model('author', authorSchema);

module.exports = model;