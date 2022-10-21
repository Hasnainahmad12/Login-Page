import React, { useState } from 'react'
import {  Link, useNavigate } from "react-router-dom"
import "../Styles/Login.css";

const Login = () => {
    <Link to="/"> </Link>
    const navigate = useNavigate();
    
    const [Name , setName] = useState("");
    const [Password , setPassword] = useState("");
    
    const HandleLogin = (e) =>{
        e.preventDefault()
        if(Name.toLocaleUpperCase()=== "USER" && Password.toLocaleUpperCase()=== "USER"){
            return (
                navigate("/Men")
                // console.log("hello page")
                )
            }
            
            if(Name ==="" && Password===""){
                alert("Your Name and Password are Empty")
            }
        }
        
  return (
    <div>
        <div>
            <form className='form'>
                <input type="text" className='input' alt="" value={Name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                <input type="password" className='input' alt="" value={Password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className='button' onClick={HandleLogin} >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login