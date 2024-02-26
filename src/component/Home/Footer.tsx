import React from 'react'
import footerLogo from '../../assets/img/footer-logo.png'

const Footer:React.FC = () => {
    return (
        <div>
            <footer className='h-230 bg-black flex'>
                <div className='flex items-center lg:ml-20 ml-6'>
                    <img src={footerLogo} className='lg:w-110 lg:h-110 w-[75px] h-[75px]' alt="" />
                    <div className=' lg:w-373 lg:h-65 ml-8'>
                        <h1 className='text-white lg:text-2xl font-bold'>DUMBWAYS.ID</h1>
                        <p className='text-white lg:text-base'>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                    </div>
                </div>
            </footer>
            <hr  className=' border-t-3 bg-white '/>
            
            <div className='flex h-56 bg-black text-center '>
                <p className='text-white lg:text-xl mx-auto flex justify-center items-center'>Komisi Pemilihan Umum DumbWays.ID | yourname 2023</p>
            </div>
        </div>
    )
}

export default Footer