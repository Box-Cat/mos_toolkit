import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { toast } from 'react-toastify';

const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>({});

  const [loginStatus, setLoginStatus] = useState<any>("");

  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get('/auth/login').then((response)=>{
      console.log(response)
      if(response.data.loggedIn === true){
        setLoginStatus(response.data.user[0].ID);
        console.log("세션 저장중")
      }
    })
  },[])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      axios.post('/auth/login', {
        id: id,
        password: password,
        withCredentials: true
      }).then(() => {
        toast.success("success!!")
        window.location.reload();
      }).catch((error) => {
        toast.error("fail!!")
      })
    } catch (error: any) {
      console.log('error', error);
      setErrors(error.response.data || {});
    }
  }

  return (
    <div className='bg-white'>

      <div className='flex flex-col items=center justify-center h-screen p-6'>
        <div className="w-10/12 mx-auto md:w-96">
          <h1 className='mb-2 text-lg font-medium'>로그인</h1>
          <h1>{loginStatus}</h1>
          <form onSubmit={handleSubmit}>
            <CustomInput
              type='text'
              value={id}
              placeholder='id'
              setValue={setId}
              error={errors.id}
            />
            <CustomInput
              type='text'
              value={password}
              placeholder='password'
              setValue={setPassword}
              error={errors.password}
            />
            <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border-gray-400 rounded">
              로그인
            </button>
            <small>
              아직 아이디가 없나요?
              <Link to="/register">
                <a className='ml-1 text-blue-500 uppercase'>회원가입</a>
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login