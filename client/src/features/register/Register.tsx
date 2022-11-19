import React, { FormEvent, useState } from 'react'
import axios from 'axios';

const Register = () => {

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      console.log("id:",id);
      //const res = await axios.post('http://localhost:5000/auth/register', {
      axios.post('http://localhost:5000/auth/register', {
        id: id,
        password: password,
        name: name,
        email: email,
      }).then(()=>{
        console.log("success")
      }).catch(()=>{
        console.log("망함")
      })
      //console.log('res', res);
      //router.push("/login");
    } catch (error: any) {
      console.log('error', error);
      //setErrors(error.response.data || {});
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={id}
          placeholder='id'
          onChange={(event) => {setId(event.currentTarget.value);}}
        /><br/>
        <input
          type='text'
          value={password}
          placeholder='password'
          onChange={(event) => {setPassword(event.currentTarget.value);}}
        /><br/>
        <input
          type='text'
          value={name}
          placeholder='name'
          onChange={(event) => {setName(event.currentTarget.value);}}
        /><br/>
        <input
          type='text'
          value={email}
          placeholder='email'
          onChange={(event) => {setEmail(event.currentTarget.value);}}
        /><br/>
        <button>
          회원 가입
        </button>
      </form>
    </div>
  )
}

export default Register