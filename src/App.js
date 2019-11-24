import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Login ></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
