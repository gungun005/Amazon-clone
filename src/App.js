import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import{BrowserRouter as Router,Route, Switch} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';
import { useStateValue } from "./StateProvider";
// import { auth } from "./firebase";


function App() {
  return (
    <Router>
    <div className="app">
     <Switch>
      <Route path="/login">
        <Login/>
      </Route>

     <Route path="/checkout">
      {/* <h1>Login</h1> */}
      <Header />
      <Checkout />
     </Route>

     <Route path="/register">
      <Register/>
     </Route>

     <Route path="/user">
      <Header/>
      <Login/>
     </Route>

     <Route path="/">
     <Header/>
     <Home/>
     </Route>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
