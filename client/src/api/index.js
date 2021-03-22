import axios from 'axios';

const url = "http://localhost:5000/notes";

export const getNotes = () => axios.get(url);

export const addNote = (newPost) => axios.post(`${url}`, newPost);

export const updateNote = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deleteNote = (id) => axios.delete(`${url}/${id}`);
