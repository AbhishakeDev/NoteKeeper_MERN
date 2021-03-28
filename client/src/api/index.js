import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

//sending token back from the localstorage to the middle ware to check if the user is present or not
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})


export const getNotes = () => API.get(`/notes`);

export const addNote = (newNote) => API.post(`/notes`, newNote);

export const updateNote = (id, updatedNote) => API.patch(`/notes/${id}`, updatedNote);

export const deleteNote = (id) => API.delete(`/notes/${id}`);


//auth routeModels

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);