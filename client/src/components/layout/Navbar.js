import React, { Fragment, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
        history.push('/');
        setUser(null);
    }
    window.onunload = function () {
        logout();
    }
    useEffect(() => {
        const token = user?.token;

        //token jwt
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])


    return (
        <Fragment>
            <div className="navbar">
                <div className="side-logo">
                    <h1 className="navbar-heading">Notes Keeper</h1>
                    <div className="subscript">By Rover</div>
                </div>
                <div className="space"></div>
                {user && <div className="img-div">
                    {user.result.imageUrl ? <img style={{ fontSize: '15px', color: '#fff' }} src={user?.result?.imageUrl} /> : <h1 style={{ textAlign: 'center', borderRadius: '50%', backgroundColor: 'yellow', fontSize: '20px', color: '#000', marginTop: '10px' }}>{user.result.name.charAt(0)}</h1>}
                </div>}
                {user && <div className="username">
                    <h3>{user.result.name}</h3>
                </div>}

                {user ? <button onClick={logout} className="user-btn">Logout</button> : <button onClick={() => history.push('/')} className="user-btn">Sign In</button>}

            </div>
        </Fragment>
    )
}

export default Navbar
