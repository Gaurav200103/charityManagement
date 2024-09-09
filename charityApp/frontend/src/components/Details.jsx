import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { donateMoney, getSingleCharity } from '../storage/userSlice';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const dispatch = useDispatch();
  const {charity, url} = useSelector(state => state.userReducer);
  console.log(charity)
  useEffect(()=>{
    dispatch(getSingleCharity());
  },[])

  useEffect(()=>{
    if(url != ""){
      window.location.href = url;
    }
  },[url])

  const handleButton = (id)=>{
    console.log("hi");
    dispatch(donateMoney(id))
  }
  return (
    <div className='max-w-[1000px] m-auto mt-10 border-2 border-black rounded-xl p-4'>
              <p>{charity.title}</p>
              <p>Donors : {charity.donors}</p>
              <p>Worth : {charity.worth}</p>
              <p>Location : {charity.location}</p>
              <p>{charity.desc}</p>
              <div className='flex justify-evenly'>
                <button className='p-2 rounded-lg bg-blue-600 text-white' onClick={()=> handleButton(charity.id)}>Donate</button>
              </div>
            </div>
  )
}

export default Details
