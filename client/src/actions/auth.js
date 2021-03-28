import { AUTH } from '../reducer/types';

import * as API from '../api/index';

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await API.signup(formData);
        // console.log(data);
        dispatch({ type: AUTH, payload: data });
        history.push('/notes');
    } catch (error) {
        alert("Either user exists already or invalid credentials");
        console.log(error);
    }
}

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await API.signin(formData);
        dispatch({ type: AUTH, payload: data });
        history.push('/notes');
    } catch (error) {
        alert("Invalid credentials or user does not exist")
        console.log(error);
    }
}