import React, { FormEvent, useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
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
            axios.post('/auth/logout').then(() => {
                toast.success("success!!")
                window.location.reload();
            }).catch((error) => {
                toast.error("fail!!")
            })
        }
        catch (error: any) {
            console.log('error', error);
            setErrors(error.response.data || {});
        }
    }
    //홈/게임/랭킹/자유게시판/로그아웃 or 로그인,회원가입
    return (
        <>
        <div className="">
            <span>로그인</span>
            <span>회원가입</span>
        </div>
        <div>
            <span>HOME</span>
            <span>GAME</span>
            <span>RANKING</span>
            <span>FORUM</span>
        </div>
        </>
    )
}

export default NavBar