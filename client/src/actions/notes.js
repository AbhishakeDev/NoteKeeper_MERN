import * as api from '../api/index';
import { GET_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, MODIFY } from '../reducer/types';

export const getNotes = () => async (dispatch) => {
    try {
        const { data } = await api.getNotes();
        dispatch({
            type: GET_NOTES,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}


export const addNote = (newPost) => async (dispatch) => {
    try {
        const { data } = await api.addNote(newPost);
        dispatch({
            type: ADD_NOTE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}


export const updateNote = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updateNote(id, updatedPost);
        dispatch({
            type: UPDATE_NOTE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteNote = (id) => async (dispatch) => {
    try {
        console.log(id);
        await api.deleteNote(id)
        dispatch({
            type: DELETE_NOTE,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}

export const modify = (flag) => (dispatch) => {
    dispatch({
        type: MODIFY,
        payload: flag
    })
}
