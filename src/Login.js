import React, { useState } from 'react';
import './Login.css';
import {register} from './Register'
import { Link } from 'react-router-dom'; 
// // import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const bcrypt=require("bcryptjs");
    const saltrounds=10;
    const postdata=async()=>
    {
        const hashedPassword = await bcrypt.hash(password, saltrounds);
        const mydata={
            email:email,
            password:hashedPassword
        }
        // });
      
       const url=await fetch ('http://localhost:8010/login',{

        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(mydata)
       })
       .then (response=>{
        console.log("response",response);
        if(response.state==200)
        alert("success");
       }).catch(e=>{
        console.log("e",e);
            })
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