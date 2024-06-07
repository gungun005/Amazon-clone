import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

// import {register} from './Register'
// // import { auth } from './firebase';

function UserDetails() {
    
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    

    const getUserData = async() => { 
       
        const response = await axios.get('http://localhost:8100/user');
        console.log(response);
        try{
        if (response) {
            console.log("logged in succesful");
            alert("login successful!");
            history.push('/');
            // Login successful
        } else {
            // Handle login failure
            console.error('Login failed:', response.message);
            return false;
        }
        }
        catch (error) {
            console.error('Error during login:', error.message);
            return false;
        }
    }
    
    const handleSubmit =async (event) => {
        event.preventDefault();
        const loginRequest = await postdata();
        console.log("Login result in handle submit")
        console.log(loginRequest);
    }

    return (
        <div className = "user">
            <Link to="/home">
                <img 
                    className="login__logo"
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt = ""
                />
            </Link>

            <div className="login__container">
                <h1>UserDetails</h1>
                <form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input value={email} onChange={handleEmailChange} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={handlePasswordChange} type="password"/>
                    <button type="submit" className="login__signInButton">
                        Sign IN</button>
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

export default UserDetails;