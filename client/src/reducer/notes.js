import { GET_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './types';

const initialState = {
    notes: []
}


const notes = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                notes: [...action.payload]
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== action.payload)
            }
        case UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => note._id === action.payload._id ? action.payload : note)
            }
        default:
            return state;
    }
}

export default notes;