import React from 'react';
import moment from 'moment';
import { deleteNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

const Note = ({ note, setCurrentId }) => {
    const dispatch = useDispatch()
    const { _id, subject, message, date } = note;
    const color = ['c0e218', '00917c', '6930c3', 'ffe227', '00917c', '7868e6', '00917c', 'fde8cd', '78c4d4', 'eff0b6', 'ffaec0', '8ac4d0', 'a1cae2', 'da723c', 'ffee93', 'a3d2ca', 'a6f0c6']
    const colorStyle = {
        backgroundColor: `#${color[Math.floor(Math.random() * color.length)]}`
    }
    return (
        <div style={colorStyle} className="note">
            <h1 className="subject">{subject}</h1>
            <p className="note-text">{message}</p>
            <div className="extra">
                <p className="datestamp">{moment(date).format('MMMM Do  h:mm a')}</p>
                <div className="btn-wrapper">
                    <button onClick={() => setCurrentId(_id)} className="note-btn"><i className="fas fa-edit"></i></button>
                    <button onClick={() => dispatch(deleteNote(_id))} className="note-btn"><i className="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Note
