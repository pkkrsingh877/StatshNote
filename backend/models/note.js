const mongoose = require('mongoose');
const User = require('../models/user');

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;