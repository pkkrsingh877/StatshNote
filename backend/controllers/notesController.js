const Note = require("../models/note");

const getNotes = async (req, res) => {
    try {
        let notes = await Note.find({ userId: req.user });
        res.status(200).json(notes);
    } catch (error) {
        console.log(error);
        res.status(400).json({ "error": "Couldn't Get The Data" });
    }
}

const getNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findOne({ _id: id, userId: req.user });
        res.status(200).json(note);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        await Note.create({ title, description, userId: req.user });
        res.status(200).json({ status: "success" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Couldn't Create Note in DB" });
    }
}

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        await Note.findOneAndUpdate({ _id: id, userId: req.user }, {
            title, description, updatedAt: Date.now()
        });
        res.status(200).json({ status: "success" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ "error": "Couldn't Update the note" });
    }
}

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findOneAndDelete({ _id: id, userId: req.user });
        res.status(200).json({ status: 'success' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: 'failure' });
    }
}

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };