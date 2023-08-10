import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sighnin from './pages/Sighnin';




function App() {
  return(
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={Sighnin} /> 
        </Switch>
    </Router>
  
  );
}

export default App;
