import React from 'react'
import logodw from '../../assets/img/logodw.png'

const AdminLandingPage:React.FC = () => {
  return (
    <div>
        <div className='flex justify-between items-center bg-black h-16'>
        <div className='flex items-center'>
          <img src={logodw} className='h-10 w-10 rounded ml-28' alt="logo-dumbways" />
          <h2 className='text-white ml-4 text-2xl font-bold tracking-wide'>DASHBOARD PEMILU</h2>
        </div>
        <div className='flex items-center'>
          <ul className='flex text-white text-xl gap-x-5 mr-10 '>
            <li>Partai</li>
            <li>|</li>
            <li>Paslon</li>
          </ul>
            <button className='w-36 h-36  mr-28 bg-grey rounded-full'>A</button> 
          
        </div>
      </div>
    </div>
  )
}

export default AdminLandingPage