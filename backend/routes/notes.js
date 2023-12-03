const express = require('express');
const router = express.Router();

const { getNotes, getNote, postNote, deleteNote, updateNote } = require('../controllers/notesController');

router.delete('/:id', deleteNote);
router.patch('/:id', updateNote)
router.post('/', postNote);
router.get('/:id', getNote);
router.get('/', getNotes);

module.exports = router;