import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom'; 
// // import { auth } from './firebase';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className = "register">
            <Link to="/home">
                <img 
                    className="register__logo"
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt = ""
                />
            </Link>

            <div className="register__container">
                <h1>Create Account</h1>
                <form>
                   <h5>Your name</h5>
                    <input value={name} onChange={event => setName(event.target.value)} type="name"/>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event =>
                    setPassword(event.target.value)} type="password"/>
                    <button 
                    type="submit" className="register__signUpButton">Sign UP</button>
                </form>
                <p>
                By creating an account or logging in ,you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
            </div>

        </div>
    );
}

export default Register;