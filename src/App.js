import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login' ;
import Checkout from './Checkout';
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [{user},dispatch]=useStateValue();

  //useEffect code 
  // code which runs based on a given condition
  useEffect(()=>{
    //event listner if auth is changed
    const unsubscribe=auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user:authUser,
        })
      }else{
        dispatch({
          type: "SET_USER",
          user:null,
        })
      }
    })
    return () =>{
      //any cleanup operations go in here
      unsubscribe();
    }
  }, []);
  console.log(user);

  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
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
