import './App.css';
import { Button, Form } from '@mui/material';
import {createBrowserRouter,RouterProvider,Route,Link,BrowserRouter,Routes} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Register from "./components/register";
import Login from "./components/Login";

function App() {
  const login = () =>{
    console.log("You are being redirected to login") 
  }
  return (
    <div className="App">
         <h1 className='Header'> CRUD </h1>

      <button 
      className='Buttona'
        onClick={() =>{ this.login();}}> LOGIN
      </button>

      <button className='Button'  > REGISTER </button>
    </div>

  );
}


export default App;
