import React, { useEffect } from 'react'
import { getCharities, setSingleCharity } from '../storage/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Charities = () => {
  const state = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(state);
  useEffect(()=>{
    dispatch(getCharities());
  },[])

  const handleButton = (item)=>{
    
    dispatch(setSingleCharity(item));
    navigate("/details")
  }

  return (
    <div className='grid grid-rows-3 m-2 justify-left'>
      {
        state?.charities.map(item =>{
          console.log(item, "hi");
          return (
            <div className='max-w-[400px] border-2 border-black rounded-xl p-4'>
              <p>{item.title}</p>
              <p>Donors : {item.donors}</p>
              <p>Worth : {item.worth}</p>
              <button className='bg-blue-600 text-white p-2 rounded-lg w-full' onClick={()=> handleButton(item)}>See More</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Charities;
