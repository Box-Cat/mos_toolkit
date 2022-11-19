import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './features/register/Register';
const App = () => {
  return (
    <div className="App">
      <h1>React</h1>
      <Routes>
          <Route path="/auth/register" element={<Register/>}/>
          {/* <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/login" element={<Login/>}/> */}
       </Routes>
    </div>
  );
}

export default App;
