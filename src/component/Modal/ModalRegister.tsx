import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IRegis from '../../interfaces/AuthRegis'

const ModalRegister:React.FC = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState<IRegis> ({
      fullname: '',
      username: '',
      gender: '',
      role: null,
      password: '',
      address: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) :void => {
      const {name, value} = event.target
      setFormData({
        ...formData,
        [name] : value
      })
    }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        const response = await fetch("http://localhost:5000/api/v1/user", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formData)
        })

        const data = await response.json()
        console.log (data)

        navigate ('/login')
      } catch (error) {
        throw error
      }
    }

  return (
    <div className='container'>
    <div className=' flex justify-center'>
      <form action=""
        className='flex flex-col' 
        onSubmit={handleSubmit}>
          <h1 
            className='text-5xl text-bottomvote font-black text-center mt-14'
            >REGISTER
          </h1>

          <label 
            htmlFor="fullname" 
            className='text-2xl font-bold text-logincolor mt-12'
            >Fullname
          </label>
          <input 
            type="text" 
            name='fullname' 
            className='px-6 lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3' 
            onChange={handleChange}
          />

          <label 
            htmlFor="address" 
            className='text-2xl  font-bold text-logincolor mt-6'
            >Alamat
          </label>
          <input 
            type="text" 
            name='address' 
            className='px-6 lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3' 
            onChange={handleChange}
          />

          <label 
            htmlFor="gender" 
            className='text-2xl font-bold text-logincolor mt-6'
            >Jenis Kelamin
          </label>
          <select 
            name="gender" 
            id="" 
            onChange={handleChange} 
            className='px-6 lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3'>
            <option value=""></option>
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </select>

          <label htmlFor="username" 
          className='text-2xl font-bold text-logincolor mt-6'
          >Username
          </label>
          <input 
            type="text" 
            name='username' 
            className='px-6 lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3' 
            onChange={handleChange} 
          />

          <label 
            htmlFor="password" 
            className='text-2xl font-bold text-logincolor mt-6'
            >Password
            </label>
          <input type="password" 
            name='password' 
            className=' px-6 lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3' 
            onChange={handleChange} 
          />

          <button type='submit' 
            className='lg:w-478 lg:h-68 w-[330px] h-[45px] bg-bottomvote font-bold lg:text-3xl text-2xl text-white rounded-2xl mt-16'
            >SUBMIT
          </button>

          <div 
            className='flex mt-6 mx-auto pb-20'>
              <p 
              className='lg:text-2xl text-xl text-logincolor italic'
              >Belum memiliki akun ?
              </p>
              <p 
              className='lg:text-2xl text-xl text-blue-500 underline italic ml-3 cursor-pointer'
              >Register
              </p>
          </div>
      </form>
    </div>
    </div>
  )
}

export default ModalRegister