import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./NavBar.css";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginOutAction } from "../features/login/loginSlice";
//import { FaSearch } from "react-icons/fa";

const NavBar = () => {
 
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let authenticate = useAppSelector(state => state.user.authenticate)

  const handleLogout = () => { 
    dispatch(loginOutAction())
    navigate('/');
  };
  //홈/게임/랭킹/자유게시판/로그아웃 or 로그인,회원가입
  return (
    <>
      <div className="nav">
        <div className="nav-links nav-auth">
          {authenticate===false
          ?<Link to='/auth/login' className="link">로그인</Link>
          :<Link to='/' className="link" onClick={handleLogout}>로그아웃</Link>}
          {!authenticate&&<Link to='/auth/register' className="link">회원가입</Link>}
        </div>
        <div className="nav-links">
          <Link to='/' className="link">HOME</Link>
          <Link to='/game' className="link">GAME</Link>
          <Link to='/rank' className="link">RANKING</Link>
          <Link to='/board' className="link">FORUM</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
