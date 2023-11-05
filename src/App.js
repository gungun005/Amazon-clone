import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import{BrowserRouter as Router,Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="app">
     <Switch>

      <Route path="/login">
    {/* <h1>Login</h1> */}
    </Route>

     <Route path="/checkout">
     {/* <h1>Login</h1> */}
     <Header />
     </Route>

     <Route path="/">
        <Header />
        <Home/>
     </Route>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
