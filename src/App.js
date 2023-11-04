import React from 'react';
import './App.css';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="app">
     <Routes>
      <Route path="/checkout"> 
      <h1>Checkout</h1>
      </Route>

      <Route path="/login"> 
      <h1>Login page</h1>
      </Route>

      <Route path="/"> 
      <h1>Home page</h1>
      </Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
