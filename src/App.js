import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <Header />
          <h1>login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
