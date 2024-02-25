import React from 'react'
import monkeyking from '../../assets/img/monkeyking.png'
import { useNavigate } from 'react-router-dom'
const AddPaslonForm:React.FC = () => {

    const navigate = useNavigate()

  return (
    <div className='container'>
           <div className='container'>
            <h1 className='text-bottomvote text-5xl font-black text-center mt-16'>ADD PASLON</h1>
            <div className='flex justify-center gap-12'>
                <img src={monkeyking} alt="" className='w-368 h-523 radius-xl mt-14' />
                <div className='flex flex-col'>
                    <label htmlFor="username" className='text-2xl font-bold text-logincolor mt-10'>Nama</label>
                    <input type="text" className='w-478 h-70 border-logincolor border-2 rounded-2xl mt-3' />
                    <label htmlFor="username" className='text-2xl font-bold text-logincolor mt-5'>Nomor Urut</label>
                    <input type="text" className='w-478 h-70 border-logincolor border-2 rounded-2xl mt-3' />
                    <label htmlFor="username" className='text-2xl font-bold text-logincolor mt-5'>Visi & Misi</label>
                    <input type="text" className='w-478 h-[249px] border-logincolor border-2 rounded-2xl mt-3' />
                    <button className='w-478 h-68 bg-bottomvote font-bold text-3xl text-white rounded-2xl mt-10' onClick={() => navigate ('/paslon')}>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPaslonForm