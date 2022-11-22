import React, { FormEvent, useState } from 'react'
import axios from 'axios';
import {Link} from  'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { toast } from 'react-toastify';

const Register = () => {

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      //axios.post('http://localhost:5000/auth/register', {
      axios.post('/auth/register', {
        id: id,
        password: password,
        name: name,
        email: email,
      }).then(() => {
        //console.log("success")
        toast.success("success!!")
      }).catch((error) => {
        //console.log("error",error)
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
          <h1 className='mb-2 text-lg font-medium'>회원가입</h1>
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
            <CustomInput
               type='text'
               value={name}
               placeholder='name'
               setValue={setName}
               error={errors.name}
            />
            <CustomInput
               type='text'
               value={email}
               placeholder='email'
               setValue={setEmail}
               error={errors.email}
            />
            <br />
            <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border-gray-400 rounded">
              회원 가입
            </button>
            <small>
              이미 가입하셨나요?
              <Link to="/login">
                <a className='ml-1 text-blue-500 uppercase'>로그인</a>
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register