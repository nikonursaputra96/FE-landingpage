import React from 'react'
import { useNavigate } from 'react-router-dom'

const ModalLogin:React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className='container'>

 
    <div className='flex justify-center'>
        <form action="" className='flex flex-col'>
        <h1 className='text-5xl text-bottomvote font-black text-center mt-16'>LOGIN</h1>
        <label htmlFor="username" className='text-2xl font-bold text-logincolor mt-12'>Username</label>
        <input type="text" className='lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3' />
        <label htmlFor="username" className='text-2xl font-bold text-logincolor mt-6'>Password</label>
        <input type="password" className='lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3' />
        <button className='lg:w-478 lg:h-68 w-[330px] h-[40px] bg-bottomvote font-bold lg:text-3xl text-2xl text-white rounded-2xl mt-16'>SUBMIT</button>
        <div className='flex mt-6 mx-auto'>
        <p className='lg:text-2xl text-xl text-logincolor italic'>Belum memiliki akun ?</p>
        <p className='lg:text-2xl text-xl text-blue-500 underline italic ml-3 cursor-pointer' onClick={() => navigate('/register')}>Register</p>
        </div>
        </form>
    </div>
    </div>
  )
}

export default ModalLogin