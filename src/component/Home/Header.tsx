import React from 'react'
import headerBrand from '../../assets/img/header-brand-1.png'
import headerBrandTwo from '../../assets/img/header-brand-2.png'

const Header:React.FC = () => {
  return (
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
  )
}

export default Header