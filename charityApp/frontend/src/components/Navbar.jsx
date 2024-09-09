import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {isOrganization} = useSelector(state => state.userReducer);
  return (
    <div className='flex justify-between shadow-xl border-2 p-4'>
      <Link to={"/"}>CharitiDonation</Link>
      <div>
        <p onClick={() => setOpen(!open)}>MORE</p>
        <div className={`flex flex-col absolute mt-6 bg-white max-w-96 text-2xl p-2 ${open ? "right-0" : "right-[-500px] hidden"} min-h-[90vh] items-center border-2 w-full`}>
          <Link to={"/login"}>Login</Link>
          <Link className={`${isOrganization == "true"? "block" : "hidden"}`} to={"/charity"}>Create_Charity</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
