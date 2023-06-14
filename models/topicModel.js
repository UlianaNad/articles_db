const mongoose = require('mongoose');

const {Schema} = mongoose;

const topicSchema = new Schema({
    title: { type: String,
        required: true}
});

const model = mongoose.model('topic', topicSchema);

module.exports = model;