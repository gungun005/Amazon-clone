import React from 'react';
import Header from './Header';
import './App.css';
import{BrowserRouter as Router,Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="app">
     <Switch to="/login">
    {/* <h2>Login</h2> */}
     </Switch>
     <Switch to="/checkout">
   
     </Switch>
     <Switch to="/">
        <Header />
        <h1>HOME PAGE!!</h1>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
