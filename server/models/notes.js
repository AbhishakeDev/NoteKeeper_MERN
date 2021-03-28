import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    creator: String,
    subject: String,
    message: String,
    date: {
        type: Date,
        default: new Date()
    }
})

const Notes = mongoose.model('NoteSchema', noteSchema);

export default Notes;