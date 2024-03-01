import React from 'react'
import { useState } from 'react'
import logodw from '../../assets/img/logodw.png'
import { useNavigate } from 'react-router-dom'

const AdminNavbar:React.FC = () => {

  const navigate = useNavigate()

  const [login, setLogin] = useState<any>(false)

  const loginButton = (): void => {
    setLogin(!login)
  }



  const [click, setClick] = useState<any>(false)

  const handleClick = ():void => {
    setClick(!click)
  }

  const content = <>
  <div className='text-center'>
    <ul className=' text-sm'>
      <li className=' py-5 bg-black text-white hover:bg-slate-800 cursor-pointer' onClick={() => navigate('/add-partai')}>Partai</li>
      <li className=' py-5 bg-black text-white  hover:bg-slate-800 cursor-pointer' onClick={() => navigate('/add-paslon')}>Paslon</li>
    </ul>
    <p className=' py-5 bg-black' onClick={loginButton}>{login ? <button className=' w-8 h-8 hover:bg-slate-800 hover:text-white bg-grey rounded-full font-bold '>A</button> : <button className=' w-24 h-8 hover:bg-slate-800 hover:text-white bg-white  rounded-lg font-bold text-sm'>LOGIN</button>}</p>
  </div>
</>

  return (
    
    <div>
        <div className='flex justify-between items-center bg-black h-16'>
        <div className='flex items-center'>
          <img src={logodw} className='h-10 w-10 rounded lg:ml-28 md:ml-14 sm:ml-6 max-[640px]:ml-6' alt="logo-dumbways" />
          <h2 className='text-white ml-4 font-bold tracking-wide lg:text-2xl max-[640px]:text-xs'>DASHBOARD PEMILU</h2>
        </div>
        <div className='lg:flex items-center sm:hidden md:hidden max-[640px]:hidden'>
          <ul className='flex text-white text-xl gap-x-5 mr-10 '>
            <li className='cursor-pointer' onClick={() => navigate('/add-partai')}>Partai</li>
            <li>|</li>
            <li className='cursor-pointer' onClick={() => navigate('/add-paslon')}>Paslon</li>
          </ul>
            <button className='w-36 h-36  mr-28 bg-grey rounded-full font-bold text-xl'>A</button> 
          
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

export default AdminNavbar