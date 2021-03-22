import React, { useEffect } from 'react'
import Note from './Note';
import { modify } from '../../actions/notes';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Notes = ({ setCurrentId }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(modify(false))
    }, [])
    const { notes } = useSelector((state) => state.notes)
    console.log(notes);
    return (
        <div className="notes">
            <div className="notes-wrapper">
                {notes !== [] && notes.map(note => <Note setCurrentId={setCurrentId} key={note._id} note={note} />)}
            </div>
        </div>
    )
}

export default Notes
