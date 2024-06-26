import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import {register} from './Register'
// // import { auth } from './firebase';

function Login() {
  const history = useHistory();
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

  const invokeGetUserAPI = async () => {
    console.log("i m inside invokeGetUserAPI ");
    const response2 = await axios.get("http://localhost:8100/user", {
      email: email,
    });
    console.log(response2);
  };
  const postdata = async () => {
    const mydata = {
      email: email,
      password: password,
    };
    console.log("My data logged : ");
    console.log(mydata);
    const response = await axios.post("http://localhost:8010/login", {
      email: email,
      password: password,
    });
    console.log(response);
    console.log(response.data);
    try {
      if (response.data.data == true) {
        invokeGetUserAPI();
        console.log("logged in succesful");
        alert("login successful!");
        history.push("/");
        // Login successfuls
      } else if(response.data.data == false){
        // Handle login failure
        console.error("Login failed:", response.data.message);
        // if (response.message === "Invalid credentials") {
        //   alert("Password doesn't matches");
        // } else {
        //   alert("User not found");
        // }
        alert(response.data.message);
        return false;
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginRequest = await postdata();
    console.log("Login result in handle submit");
    console.log(loginRequest);
  };

  return (
    <div className="login">
      <Link to="/home">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input value={email} onChange={handleEmailChange} type="email" />
          <h5>Password</h5>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
          <button type="submit" className="login__signInButton">
            Sign IN
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <Link to="/register">
          <button className="login__registerButton">
            Create your Amazon Account.
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
