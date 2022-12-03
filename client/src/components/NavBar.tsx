import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";

//import { FaSearch } from "react-icons/fa";
//import { useAuthDispatch, useAuthState } from "../context/auth"

const NavBar = () => {
  //const { loading, authenticated } = useAuthState();
  //const dispatch = useAuthDispatch();
  const [errors, setErrors] = useState<any>({});

  // const handleLogout = () => {
  //     axios.post("/auth/logout")
  //         .then(() => {
  //             dispatch("LOGOUT");
  //             window.location.reload();
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         })
  // }

  const handleLogout = () => {
    try {
      axios
        .post("/auth/logout")
        .then(() => {
          toast.success("success!!");
          window.location.reload();
        })
        .catch((error) => {
          toast.error("fail!!");
        });
    } catch (error: any) {
      console.log("error", error);
      setErrors(error.response.data || {});
    }
  };
  //홈/게임/랭킹/자유게시판/로그아웃 or 로그인,회원가입
  return (
    <>
      <div className="nav">
        <div className="nav-links nav-auth">
          <Link to='/auth/login' className="link">로그인</Link>
          <Link to='/auth/register' className="link">회원가입</Link>
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
