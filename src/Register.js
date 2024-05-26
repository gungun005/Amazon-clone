import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// // import { auth } from './firebase';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobileno, setMob] = useState("");
  const [buttonClick, setButtonClick] = useState(false);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleDobChange = (e) => setDob(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleMobChange = (e) => setMob(e.target.value);
  const handleStatesChange = (e) => setStates(e.target.value);
  const handlePincodeChange = (e) => setPincode(e.target.value);
  

  const history = useHistory();

  //auth DB mae store/post krne se phle hm user db me check krenge fir post krnenge auth me

  //    const postdataAuth=async()=>
  //     {
  //         console.log("i m being called by post data to store data in auth DB");
  //         const mydata2={
  //             name:name,
  //             email:email,
  //             dob:dob,
  //             password:password
  //         }
  //        const url=await fetch ('http://localhost:8010/register',{
  //         method:'POST',
  //         headers:{
  //             'Content-Type':'application/json'
  //         },
  //         body:JSON.stringify(mydata2)
  //        })
  //        .then (response=>{
  //         console.log("response",response);
  //         if(response.state==200)
  //         alert("success");
  //        }).catch(e=>{
  //         console.log("e",e);
  //        })
  //     }

  //     const postdata=async()=>
  //         {
  //             const mydata={
  //                 name:name,
  //                 email:email,
  //                 dob:dob,
  //                 password:password
  //             }
  //            const url=await fetch ('http://localhost:8100/user',{
  //             method:'POST',
  //             headers:{
  //                 'Content-Type':'application/json'
  //             },
  //             body:JSON.stringify(mydata)
  //            })
  //            .then (response=>{
  //             console.log("response",response);
  //             if(response){
  //                 console.log(response);
  //                 postdataAuth()
  //             }
  //            }).catch(e=>{
  //             console.log("e",e);
  //            })
  //         }
  //   useEffect(() => {
  //     async function invokeCreateUserAPI(requestBody) {
  //       console.log("Calling from API");
  //       const response = await axios.get(
  //         "http://localhost:8100/user",
  //         requestBody
  //       );
  //       console.log(response);
  //       return response;
  //     }
  //     console.log("Triggering useEffect in register");
  //     let requestBody = {
  //       name: name,
  //       email: email,
  //       dob: dob,
  //       password: password,
  //     };
  //     let createUserResponse = invokeCreateUserAPI(requestBody);
  //     if (createUserResponse == true) {
  //       async function invokeCreateAuthAPI(requestBody) {
  //         console.log("Calling from API");
  //         const response = await axios.get(
  //           "http://localhost:8010/register",
  //           requestBody
  //         );
  //         console.log(response);
  //         return response;
  //       }
  //       invokeCreateAuthAPI();
  //     }
  //   }, []);

  const createUser = () => {
    async function invokeCreateUserAPI(requestBody) {
      console.log("Calling from API");
      const createUserResponse = await axios.post(
        "http://localhost:8100/user",
        requestBody
      );
      console.log(createUserResponse);
      if (createUserResponse.data == true) {
        console.log("Calling register function");
        async function invokeCreateAuthAPI(requestBody) {
          console.log("Within invoke command");
          console.log("Calling from API");
          console.log(requestBody);
          const response = await axios.post("http://localhost:8010/register", {
            name: name,
            email: email,
            dob: dob,
            password: password,
          });
          console.log(response);
          if (response) {
            console.log(" im here in create user function");
            alert(`User created ! Now you can login!`);
            history.push("/login");
          }
          return response;
        }
        const createAuthResponse = invokeCreateAuthAPI();
        return createAuthResponse;
      }
    }
    let requestBody = {
      name: name,
      email: email,
      dob: dob,
      password: password,
    };
    let createUserResponse = invokeCreateUserAPI(requestBody);
    // console.log("i m create User response");

    if (createUserResponse) {
      history.push("/login");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
  };

  return (
    <div className="register">
      <Link to="/home">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="register__container">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <h5>Your name</h5>
          <input value={name} onChange={handleNameChange} type="name" />
          <h5>E-mail</h5>
          <input value={email} onChange={handleEmailChange} type="email" />
          <h5>DOB</h5>
          <input value={dob} onChange={handleDobChange} type="dob" />
          <h5>Address</h5>
          <input value={address} onChange={handleAddressChange} type="address" />
          <h5>City</h5>
          <input value={city} onChange={handleCityChange} type="city" />
          <h5>State</h5>
          <input value={states} onChange={handleStatesChange} type="states" />
          <h5>Pincode</h5>
          <input value={pincode} onChange={handlePincodeChange} type="pincode" />
          <h5>MobileNo</h5>
          <input value={mobileno} onChange={handleMobChange} type="mob" />

          {/* <DatePicker selected={dob} onChange={handleDobChange}  type="dob"/> */}
          <h5>Password</h5>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />

          
          <button type="submit" className="register__signUpButton">
            Sign UP
          </button>
        </form>
        <p>
          By creating an account or logging in ,you agree to Amazon's Conditions
          of Use and Privacy Notice.
        </p>
      </div>
    </div>
  );
}

export default Register;
