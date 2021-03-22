import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Notes from './components/notes/Notes';
import Form from './components/form/Form';
import { getNotes } from './actions/notes';
import { useDispatch } from 'react-redux';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch])

    return (<Router>
        {currentId ?
            <Fragment>
                <div className="body-wrapper">
                    <div className="container">
                        <Navbar />
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </div>
                <Footer />
            </Fragment>
            :


            <Fragment>
                <div className="body-wrapper">
                    <div className="container">
                        <Link className="route-btn route-btn-1" to='/addnote'><i className="fas fa-plus"></i></Link>
                        <Link className="route-btn route-btn-2" to='/'><i className="fas fa-eye"></i></Link>
                        <Navbar />
                        <Switch>
                            <Route exact path='/addnote' component={() => <Form currentId={currentId} setCurrentId={setCurrentId} />} />
                            <Route exact path='/' component={() => <Notes setCurrentId={setCurrentId} />} />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </Fragment>
        }
    </Router >);
}

export default App;
