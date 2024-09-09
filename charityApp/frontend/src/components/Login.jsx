import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../storage/userSlice';

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForm = ()=>{
    event.preventDefault();

    dispatch(loginUser(user));
    console.log(user);
  }
  return (
    <div className='flex justify-center items-center'>
      <form action="" className='max-w-[500px] w-full shadow-xl p-4 mt-[10%] border-gray-400 border-2' onSubmit={()=> handleForm()}>
        <p className='font-bold text-2xl text-center'>LOG_IN</p>
        <label htmlFor="name">Email : </label>
        <input required type="text" className='block w-full p-2' placeholder='Enter your email...' onChange={(e)=> setUser({...user, email : e.target.value})} />
        <label htmlFor="name">Password : </label>
        <input required type="text" className='block w-full p-2' placeholder='Enter your password...' onChange={(e)=> setUser({...user, password : e.target.value})} />
        <Link to={"/register"}>New Account</Link>
        <button type='submit' className='bg-blue-600 text-white w-full rounded-lg mt-2'>LOG_IN</button>
      </form>
    </div>
  )
}

export default Login
