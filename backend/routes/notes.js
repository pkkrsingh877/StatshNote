const express = require('express');
const router = express.Router();

const { getNotes, getNote, createNote, deleteNote, updateNote } = require('../controllers/notesController');

router.delete('/:id', deleteNote);
router.patch('/:id', updateNote)
router.post('/', createNote);
router.get('/:id', getNote);
router.get('/', getNotes);

module.exports = router;