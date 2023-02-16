import React from 'react'
import { useState } from "react";

function Login() {
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  return (
    <div className='login'>
    <h1>LOGIN</h1>
    <div className='Formlog'>

    <input type="email" 
        class="emailA"  
        placeholder="Enter your email here" 
        onChange={(e) => setEmail(e.target.value)}
        maxLength={30}/>

    <input class="password" 
        type="password" 
        placeholder="Enter your password here" 
        required
        onChange={(e) => setPassword(e.target.value)}
        maxLength={20} />

    <button className='Button-log'> REGISTER </button>

    </div>
    </div>
  
  )
  }
}

export default Login

