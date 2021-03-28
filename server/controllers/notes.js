import mongoose from 'mongoose';
import Notes from '../models/notes.js';

export const getNotes = async (req, res) => {
    try {
        const notes = await Notes.find({ creator: req.userId });
        console.log(notes);
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(404).json({ message: error })
    }
}

export const createNote = async (req, res) => {
    const data = req.body;
    const note = { ...data, creator: req.userId };
    console.log(note);
    const newNote = new Notes(note);

    try {
        await newNote.save();
        res.status(200).json(newNote);
    }
    catch (error) {
        res.status(409).json({ message: error })
    }
}

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const note = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedNote = { ...note, _id: id };
    await Notes.findByIdAndUpdate(id, updatedNote, { new: true });
    res.json(updatedNote);
}

export const deleteNote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Notes.findByIdAndDelete(id);
    res.json({ message: "Note deleted Successfully" });
}