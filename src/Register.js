import React, {  useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
// // import { auth } from './firebase';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const bcrypt=require("bcryptjs");
    const saltrounds=10;
  
   const postdata=async()=>
    {
        const hashedPassword = await bcrypt.hash(password, saltrounds);
        const mydata={
            name:name,
            email:email,
            password:hashedPassword
        }
       const url=await fetch ('http://localhost:8010/register',{
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
                    <input value={name} onChange={handleNameChange} type="name"/>
                    <h5>E-mail</h5>
                    <input value={email} onChange={ handleEmailChange } type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={handlePasswordChange} type="password"/>
                    <button onClick={postdata}
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