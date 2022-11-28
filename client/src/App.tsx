import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './features/register/Register';
import Login from './features/login/Login';
import Home from './features/home/Home';
import Game from './features/game/Game';
import Board from './features/board/Board';
import Rank from './features/rank/Rank';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={500}/>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth/register" element={<Register/>}/>
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/rank" element={<Rank/>}/>
          <Route path="/board" element={<Board/>}/>
       </Routes>
    </div>
  );
}

export default App;
