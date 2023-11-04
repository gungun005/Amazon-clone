import React from 'react';
import Header from './Header';
import './App.css';
import{BrowserRouter as Router,Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="app">
     <Switch to="/login">
        <h1>Login</h1>
     </Switch>
     <Switch to="/checkout">
      <h3>Checkout</h3>
     </Switch>
     <Switch to="/">
        <Header />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
