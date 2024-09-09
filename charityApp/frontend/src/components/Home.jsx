import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { myCharities } from '../storage/userSlice';
import Charities from './Charities';

const Home = () => {
  const state = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(()=>{
    dispatch(myCharities());
  },[])

  return (
    <>
    {
      state.isOrganization == "true" ? <div className='grid grid-rows-3 m-2 justify-left'>
      {
        state?.myCharities.map(item =>{
          return (
            <div className='max-w-[400px] border-2 border-black rounded-xl p-4'>
              <p>{item.title}</p>
              <p>Donors : {item.donors}</p>
              <p>Worth : {item.worth}</p>
              <p>Location : {item.location}</p>
              <p>{item.desc}</p>
              <div className='flex justify-evenly'>
                <button className='p-2 rounded-lg bg-blue-600 text-white'>AddProject</button>
                <button className='p-2 rounded-lg bg-blue-600 text-white'>UseDonation</button>
              </div>
            </div>
          )
        })
      }
    </div>
    : <Charities />

    }
    
    </>
  )
}

export default Home
