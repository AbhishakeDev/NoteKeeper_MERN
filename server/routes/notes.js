import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';

import { getNotes, createNote, updateNote, deleteNote } from '../controllers/notes.js';

router.get('/', auth, getNotes);
router.post('/', auth, createNote);
router.patch('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);

export default router;