import React, { useState, useEffect } from 'react'
import Note from './Note';
import { modify, getNotes } from '../../actions/notes';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Notes = ({ setCurrentId }) => {
    const user = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const { notes } = useSelector((state) => state.notes)
    useEffect(() => {
        dispatch(modify(false))
        dispatch(getNotes());
    }, [])

    console.log(notes);
    return (<div className="notes">

        {notes.length > 0 ?
            <>
                {user ? <div className="notes-wrapper">
                    {notes !== [] && notes.map(note => <Note setCurrentId={setCurrentId} key={note._id} note={note} />)}
                </div>
                    :
                    <div className="notes-wrapper">
                        <h1 style={{ margin: ' 20px 10px', color: '#fff', textAlign: 'center' }}>No notes till date {!user && ', Please add notes!'} </h1>
                    </div>}
            </> :

            <div className="notes-wrapper">
                <h1 style={{ margin: ' 20px 10px', color: '#fff', textAlign: 'center' }}>No notes till date {!user && ', Please sign in to view notes!'} </h1>
            </div>
        }

    </div>
    )
}

export default Notes
