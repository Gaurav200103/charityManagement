import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCharity } from '../storage/userSlice';

function Charity() {
  const [charity, setCharity] = useState({});
  const dispatch = useDispatch();

  const handleForm = ()=>{
    event.preventDefault();

    console.log(charity);
    dispatch(addCharity(charity));
  }
  return (
    <div className='flex justify-center items-center'>
      <form action="" className='max-w-[500px] w-full shadow-xl p-4 mt-[10%] border-gray-400 border-2' onSubmit={() => handleForm()}>
        <p className='font-bold text-2xl text-center'>Create Charity</p>
        <label htmlFor="title">Title : </label>
        <input required type="text" className='block w-full p-2' placeholder='Enter your name...' onChange={(e) => setCharity({ ...charity, title: e.target.value })} name='title' />
        <label htmlFor="location">Location : </label>
        <input required type="text" className='block w-full p-2' placeholder='Enter your email...' onChange={(e) => setCharity({ ...charity, location: e.target.value })} name='location' />
        <label htmlFor="category">Category : </label>
        <select name="category" onChange={(e) => setCharity({...charity, category:e.target.value})} className='block' id="">
          <option value="">Categories</option>
          <option value="children">Children</option>
          <option value="elderly">Elderly</option>
          <option value="animals">Animals</option>
        </select>
        <label htmlFor="desc">Description : </label>
        <textarea rows={3} required type="text" className='block w-full p-2' placeholder='Enter your password...' onChange={(e) => setCharity({ ...charity, desc: e.target.value })} name='desc' />
        

        <button type='submit' className='bg-blue-600 text-white w-full rounded-lg mt-2'>Create</button>
      </form>
    </div>
  )
}

export default Charity
