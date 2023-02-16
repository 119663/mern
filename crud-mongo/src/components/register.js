import e from 'express';
import React from 'react'
import { useState } from "react";
import Axios from "axios"

function register() {
    const [name, setName] = useState("");
    const [number, setPhoneNumber] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const reg = () => {
      Axios.post("http://localhost:3000/insert", {name: name, number: number, email: email, password: password,});
    };

  return (
    <div className='register'>
    <h1> Registration </h1>
    <div className='Formreg'>

        <input type="email" 
        class="emailA"  
        placeholder="Enter your email here" 
        onChange={(event) => {setEmail(event.target.value)}}
        // onChange={(e) => setEmail(e.target.value)}
        maxLength={30}/>

        <input class="name" 
        type="text" 
        placeholder="Enter your name here" 
        onChange={(event) => {setName(event.target.value)}}
        // onChange={(e) => setName(e.target.value)}
        maxLength={20} />

        <input class="number" 
        type="number" 
        placeholder="Enter your phone number here" 
        onChange={(e) => setPhoneNumber(e.target.value)}
        maxLength={20} />

        <input class="password" 
        type="password" 
        placeholder="Enter your password here" 
        required
        onChange={(e) => setPassword(e.target.value)}
        maxLength={20} />

       <button className='Button-reg' onClick={reg}> REGISTER </button>
    </div>
    </div>
  )
  }

export default register

