import React, { useState } from 'react';
import './Login.css';
import {register} from './Register'
import { Link } from 'react-router-dom'; 
// // import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
        <div className = "login">
            <Link to="/home">
                <img 
                    className="login__logo"
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt = ""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event =>
                    setPassword(event.target.value)} type="password"/>
                    <button 
                    type="submit" className="login__signInButton">Sign IN</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>
                <Link to='/register'>
                <button 
                className="login__registerButton">Create your Amazon Account.</button>
                </Link>
            </div>

        </div>
    );
}

export default Login;