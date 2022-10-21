import React from 'react'
import Login from "./Components/Login";
import Men from "./Components/Men";
import {BrowserRouter , Routes, Route} from "react-router-dom";

const Index = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/men' element={<Men />}/>
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default Index