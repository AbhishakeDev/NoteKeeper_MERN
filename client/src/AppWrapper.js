import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
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

    return (<Fragment>
        {currentId ?
            <Fragment>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Fragment>
            :
            <Fragment>
                <Link className="route-btn route-btn-1" to='/addnote'><i className="fas fa-plus"></i></Link>
                <Link className="route-btn route-btn-2" to='/notes'><i className="fas fa-eye"></i></Link>
                <Switch>
                    <Route exact path='/addnote' component={() => <Form currentId={currentId} setCurrentId={setCurrentId} />} />
                    <Route exact path='/notes' component={() => <Notes setCurrentId={setCurrentId} />} />
                </Switch>
            </Fragment>
        }</Fragment>
    );
}

export default App;
