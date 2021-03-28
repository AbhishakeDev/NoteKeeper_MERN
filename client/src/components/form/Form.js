import React, { useState, Fragment, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { addNote, updateNote, modify } from '../../actions/notes';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const Form = ({ currentId, setCurrentId }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const { isSubmitted } = useSelector((state) => state.submit);
    const note = useSelector(state => currentId ? state.notes.notes.find(note => note._id === currentId) : null)
    console.log(isSubmitted);

    const dispatch = useDispatch();
    const [NoteItem, setNoteItem] = useState({
        subject: '',
        message: '',
        date: new Date()
    })

    useEffect(() => {
        if (currentId) {
            setNoteItem(note);
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [note])

    const { subject, message } = NoteItem;

    const onChange = e => (
        setNoteItem({
            ...NoteItem,
            [e.target.name]: e.target.value,
        })
    )
    const onSubmit = (e) => {
        e.preventDefault();

        if (NoteItem.subject !== '' && NoteItem.message !== '') {
            if (currentId) {
                dispatch(updateNote(currentId, NoteItem));
                setCurrentId(null)
            }
            else {
                dispatch(addNote(NoteItem))
            }

            dispatch(modify(true))
            // console.log(NoteItem);
            setNoteItem({
                subject: '',
                message: ''
            })
        }
        else {
            alert('Please enter something');
        }

    }

    return (
        <Fragment>
            {isSubmitted ? <Route><Redirect to='/notes' /></Route>
                :
                <>{user ? <div className="add-notes">
                    <form onSubmit={onSubmit} className="note-form">
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input name="subject" onChange={onChange} value={subject} type="text" />
                            <label>Note</label>
                            <textarea name="message" onChange={onChange} value={message}></textarea>
                        </div>
                        <input type="submit" className="submit-btn" value="Add Note" />
                    </form>
                </div>
                    :
                    <div className="notes">
                        <div className="notes-wrapper">
                            <h1 style={{ margin: ' 20px 10px', color: '#fff', textAlign: 'center' }}>Please {!user && 'sign in to'} add notes!</h1>
                        </div>
                    </div>}</>
            }</Fragment>

    )
}

export default Form
