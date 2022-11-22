import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './features/register/Register';
import Home from './features/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={500}/>
      
      <Routes>
          <Route path="/auth/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/game" element={<Game/>}/>
          <Route path="/login" element={<Login/>}/> */}
       </Routes>
    </div>
  );
}

export default App;
