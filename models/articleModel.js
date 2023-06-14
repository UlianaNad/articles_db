const mongoose = require('mongoose');

const {Schema} = mongoose;

const articleSchema = new Schema({
    title: { type: String,
            required: true},
    text: { type: String, 
            required: true},
    author:{ 
        type: Schema.Types.ObjectId,
        ref: 'author',
        required: true},
    createdAt: {type:Date,
        default: () => Date.now(),
        immutable:true },
});

const model = mongoose.model('article', articleSchema);

module.exports = model;