import React from 'react'
import { useState } from 'react'
import logodw from '../../assets/img/logodw.png'

const Navbar:React.FC = () => {

    const [login, setLogin] = useState<any>(false)
  
    const loginButton = ():void => {
      setLogin(!login)
    }
 
  return (
    <div className='flex justify-between items-center bg-black h-16'>
        <div className='flex items-center'>
          <img src={logodw} className='h-10 w-10 rounded ml-28' alt="logo-dumbways" />
          <h2 className='text-white ml-4 text-2xl font-bold tracking-wide'>PEMILU PRESIDEN DUMBWAYS.ID</h2>
        </div>
        <div className='flex items-center'>
          <ul className='flex text-white text-xl gap-x-5 mr-10 '>
            <li>Partai</li>
            <li>|</li>
            <li>Paslon</li>
            <li>|</li>
            <li>Voting</li>
          </ul>
          <button onClick={loginButton}>{login ? <button className='w-36 h-36  mr-28 bg-grey rounded-full'>D</button>  : <button className=' bg-white w-28 h-9 rounded font-bold text-xl mr-28'>LOGIN</button>}</button>
          
        </div>
      </div>
  )
}

export default Navbar