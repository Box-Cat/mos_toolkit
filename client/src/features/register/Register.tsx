import React, { FormEvent, useState } from 'react'
import axios from 'axios';
import {Link} from  'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { useNavigate } from 'react-router-dom';
import { signupAction } from '../login/loginSlice';

const Register = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let authenticate = useAppSelector(state => state.user.authenticate)

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(signupAction({id,password,name,email}));
    navigate('/');
  }

  return (
    <div className=''>
      <div className=''>
        <div className="">
          <h1 className=''>회원가입</h1>
          <form onSubmit={handleSubmit}>
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
            <CustomInput
               type='text'
               value={name}
               placeholder='name'
               setValue={setName}
            />
            <CustomInput
               type='text'
               value={email}
               placeholder='email'
               setValue={setEmail}
            />
            <br />
            <button className="">
              회원 가입
            </button>
            <small>
              이미 가입하셨나요?
              <Link to="/auth/login">
                로그인
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register