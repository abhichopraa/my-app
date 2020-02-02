import React, {Fragment} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login'
import Homepage from './Components/Homepage/Homepage'


function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Homepage} />        
      </Router>
    </Fragment>
  );
}

export default App;
