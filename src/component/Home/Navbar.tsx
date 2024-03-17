import React from 'react'
import { useState } from 'react'
import logodw from '../../assets/img/logodw.png'
import { useNavigate } from 'react-router-dom'

const Navbar: React.FC = () => {

 

  const navigate = useNavigate()


  const [click, setClick] = useState<any>(false)

  const handleClick = ():void => {
    setClick(!click)
  }

  const content = <>
    <div className='text-center'>
      <ul className=' text-sm'>
        <li className=' py-5 bg-black text-white hover:bg-slate-800 cursor-pointer'>Partai</li>
        <li className=' py-5 bg-black text-white  hover:bg-slate-800 cursor-pointer' onClick={() => navigate('/modalvote')}>Paslon</li>
        <li className='cursor-pointer py-5 bg-black text-white  hover:bg-slate-800' onClick={() => navigate('/vote')}>Voting</li>
      </ul>
   
    </div>
  </>

  return (
    <div>

      <div className='flex h-16 justify-between items-center bg-black'>
        <div className='flex items-center'>
          <img src={logodw} className='h-10 w-10 rounded lg:ml-28 md:ml-14 sm:ml-6 max-[640px]:ml-6' alt="logo-dumbways" />
          <h2 className='text-white ml-4 font-bold tracking-wide lg:text-xl max-[640px]:text-xs'>PEMILU PRESIDEN DUMBWAYS.ID</h2>

        </div>

        <div className='lg:flex lg:items-center sm:hidden md:hidden max-[640px]:hidden'>
          <ul className='flex text-white text-xl gap-x-5 mr-10 '>
            <li>Partai</li>
            <li>|</li>
            <li className='cursor-pointer' onClick={() => navigate('/modalvote')}>Paslon</li>
            <li>|</li>
            <li className='cursor-pointer' onClick={() => navigate('/vote')}>Voting</li>
            <p className=' w-36 h-36 ml-5  bg-grey rounded-full font-bold flex items-center justify-center'>D</p>
          </ul>
       
          {/* <p onClick={loginButton}>{login ? <button className='w-36 h-36  mr-28 bg-grey rounded-full'>D</button> : <button className=' bg-white w-28 h-9 rounded-lg font-bold text-xl mr-28'>LOGIN</button>}</p> */}

        </div>

        <div className='lg:hidden flex mr-6 cursor-pointer' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
      </div>

      <div>{click && content}</div>
    </div>
  )
}

export default Navbar