import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { useNavigate } from 'react-router-dom';
import { loginAction } from './loginSlice'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  axios.defaults.withCredentials = true;

  //로그인
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(loginAction({id, password}))
    navigate('/')
  }

  return (
    <div className=''>
      <div className=''>
        <div className="">
          <h1 className=''>로그인</h1>
          <form onSubmit={handleLogin}>
            <CustomInput
              type='text'
              value={id}
              placeholder='id'
              setValue={setId}
            />
            <CustomInput
              type='text'
              value={password}
              placeholder='password'
              setValue={setPassword}
            />
            <button className="">
              로그인
            </button>
            <small>
              아직 아이디가 없나요?
              <Link to="/register">
                <button>회원가입</button>
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login