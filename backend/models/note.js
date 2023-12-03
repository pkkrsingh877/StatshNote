const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    }
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;