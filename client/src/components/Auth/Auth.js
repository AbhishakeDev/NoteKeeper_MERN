import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { LOGOUT, AUTH } from '../../reducer/types';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch()
    const [isSignup, setIsSignup] = useState(false);

    const switchMode = () => {
        setIsSignup((prevState) => !prevState);
    }

    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({
                type: AUTH,
                payload: { result, token }
            })
            history.push('/notes');
        }
        catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        alert('Google Sign in was unsuccessful')
        console.log(error);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }

        setFormData(initialState);
    }

    return (
        <div className="notes">
            <div className="header">
                <h1>Join Us</h1>
                <p>Save your notes like never before!</p>
            </div>
            <div className="add-notes">
                <form onSubmit={handleSubmit} className="note-form auth-form">
                    {isSignup && <div className="name">
                        <input onChange={handleChange} type="text" placeholder="Firstname" name="firstName" />
                        <input onChange={handleChange} type="text" placeholder="Lastname" name="lastName" />
                    </div>}
                    <input onChange={handleChange} type="email" name="email" placeholder="Email Address" />
                    <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                    {isSignup && <input onChange={handleChange} type="password" name="confirmPassword" placeholder="Confirm Password" />}
                    <div className="auth-btn">
                        <input type="submit" value={isSignup ? 'Sign Up' : 'Sign In'} />
                    </div>
                    <GoogleLogin
                        clientId="643492573472-v170i1csoj27lc01k0nhovor8qtuvucn.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <div className="auth-btn">
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fab fa-google"></i>Sign In With Google</button>
                            </div>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <div className="switch">
                        <button type="button" onClick={switchMode} className="switch-btn">{isSignup ? 'Already have an account,Sign In!' : 'Not a member, Sign Up Now!'}</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Auth
