import React, { useState } from 'react';
import './Login.css';
const axios = require('axios');
//import { useHistory } from 'react-router-dom'
// import {register} from './Register'
import { Link } from 'react-router-dom'; 
// // import { auth } from './firebase';

function Login() {
    
    //const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    // const bcrypt=require("bcryptjs");
    // const salt = bcrypt.genSaltSync(10);

    // const fetchData = async (requestBody) => {
    //     const response = axios.get('http://localhost:8010/login', requestBody);
    //     console.log(response);
    //     return response;
    // }

    // const postData = () => {
    //     const requestBody = {
    //         email,
    //         password
    //     }
    //     console.log('My data ');
    //     console.log(requestBody);
    //     const result = fetchData(requestBody);
    //     console.log(result);
    // }

    const postdata = async() => { 
        //  e.preventDefault();
        // const hashedPassword = await bcrypt.hashSync(password, salt);
        const mydata={
            email:email,
            password:password
        }
        // });
        console.log('My data logged : ')
        console.log(mydata)
        const response = await fetch ('http://localhost:8010/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(mydata)
        })
        console.log("hi its me!");
        const data = response.json();
        console.log(data);
        console.log(data.success);
        try{
        if (data.success) {
            console.log("logged in succesful");
            history.push('/');
            // Login successful
        } else {
            // Handle login failure
            console.error('Login failed:', data.message);
            return false;
        }
        }
        catch (error) {
            console.error('Error during login:', error.message);
            return false;
        }
    }

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
                    <input value={email} onChange={handleEmailChange} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={handlePasswordChange} type="password"/>
                    <button onClick={postdata}
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