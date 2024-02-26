import React from 'react'
import headerBrand from '../../assets/img/header-brand-1.png'
import headerBrandTwo from '../../assets/img/header-brand-2.png'

const Header: React.FC = () => {
  return (
    <div className='px-6'>
      <header className='container flex justify-between mx-auto lg:w-1141 lg:h-516 bg-gradients mt-11 rounded-3xl overflow-hidden'>
        <div className=''>
          <img src={headerBrand} alt="" className='lg:w-342 lg:h-237 w-[171px] h-[118px] rounded-tl-lg opacity-70 brightness-50' />
          <div className=' lg:w-592 lg:h-126 lg:mt-24 w-[250px]  mt-8'>
            <h1 className='lg:text-64 text-xl  font-bold text-white leading-tight ml-6'>SELAMAT DATANG</h1>
            <p className='lg:text-2xl text-sm  font-bold text-white leading-tight ml-6 ' >PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA</p>
          </div>
        </div>
        <div className=''>
          <img src={headerBrandTwo} alt="" className='lg:w-286 lg:h-473 w-[143px] h-[236px] mr-24' />
        </div>
      </header>
    </div>

  )
}

export default Header