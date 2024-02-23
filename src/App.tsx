import { useState } from 'react'

import logodw from './assets/img/logodw.png'
import headerBrand from './assets/img/header-brand-1.png'
import headerBrandTwo from './assets/img/header-brand-2.png'
import section from './assets/img/section.png'
import footerLogo from './assets/img/footer-logo.png'
import './index.css'

function App() {

  const [login, setLogin] = useState<any>(false)
  
  const loginButton = ():void => {
    setLogin(!login)
  }

  return (
    <div className='bg-grey'>
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

      <header className=' flex justify-between mx-auto w-1141 h-516 bg-gradients mt-11 rounded-3xl'>
        <div className=''>
          <img src={headerBrand} alt="" className='w-342 h-237 rounded-tl-lg opacity-70 brightness-50' />
          <div className=' w-592 h-126 mt-24'>
            <h1 className='text-64 font-bold text-white leading-tight ml-6'>SELAMAT DATANG</h1>
            <p className='text-2xl font-bold text-white leading-tight ml-6'>PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA</p>
          </div>
        </div>
        <div>
          <img src={headerBrandTwo} alt="" className='w-286 h-473 mr-24' />
        </div>
      </header>

      <section className='grid grid-cols-3 gap-4 w-1140 h-867 mx-auto mt-24'>
        <div className='col-span-2 w-753 h-421 bg-image'>
          <button className='bg-red w-232 h-47 rounded-xl text-white font-bold text-xl mt-72 ml-4'>Senin, 03 JAN 2023</button>
          <h1 className='font-bold text-3xl text-white ml-4'>KPU TETAPKAN 3 MENTOR TERBAIK</h1>
          <p className='text-white text-2xl ml-4'>Super Admin</p>
        </div>

        <div className='w-367 h-421 bg-white'>
          <img src={section} className='' alt="" />
          <button className='bg-red w-217 h-47 rounded-xl text-white font-bold text-xl mt-3 ml-4'>Senin, 03 JAN 2023</button>
          <h1 className='font-bold text-3xl mt-3 ml-4'>KPU TETAPKAN 3 MENTOR TERBAIK</h1>
          <p className='text-2xl ml-4'>Super Admin</p>
        </div>

        <div className='w-367 h-421 bg-white'>
          <img src={section} className='' alt="" />
          <button className='bg-red w-217 h-47 rounded-xl text-white font-bold text-xl mt-3 ml-4'>Senin, 03 JAN 2023</button>
          <h1 className='font-bold text-3xl mt-3 ml-4'>KPU TETAPKAN 3 MENTOR TERBAIK</h1>
          <p className='text-2xl ml-4'>Super Admin</p>
        </div>

        <div className='w-367 h-421 bg-white'>
          <img src={section} className='' alt="" />
          <button className='bg-red w-217 h-47 rounded-xl text-white font-bold text-xl mt-3 ml-4'>Senin, 03 JAN 2023</button>
          <h1 className='font-bold text-3xl mt-3 ml-4'>KPU TETAPKAN 3 MENTOR TERBAIK</h1>
          <p className='text-2xl ml-4'>Super Admin</p>
        </div>

        <div className='w-367 h-421 bg-white'>
          <img src={section} className='' alt="" />
          <button className='bg-red w-217 h-47 rounded-xl text-white font-bold text-xl mt-3 ml-4'>Senin, 03 JAN 2023</button>
          <h1 className='font-bold text-3xl mt-3 ml-4'>KPU TETAPKAN 3 MENTOR TERBAIK</h1>
          <p className='text-2xl ml-4'>Super Admin</p>
        </div>
      </section>

      <aside className='bg-white h-384 mt-16 flex'>
        <p className='text-black font-bold text-41 text-center flex justify-center items-center'>PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT</p>
      </aside>

      <footer className='h-230 bg-black flex'>
        <div className='flex items-center ml-20'>
          <img src={footerLogo} className='w-110 h-110' alt="" />
          <div className=' w-373 h-65 ml-8'>
            <h1 className='text-white text-2xl font-bold'>DUMBWAYS.ID</h1>
            <p className='text-white text-base'>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
          </div>
        </div>
      </footer>
        <div className='flex h-3 bg-white '>
        </div>
        <div className='flex h-56 bg-black '>
          <p className='text-white text-xl mx-auto flex justify-center items-center'>Komisi Pemilihan Umum DumbWays.ID | yourname 2023</p>
        </div>
    </div>
  )
}

export default App
