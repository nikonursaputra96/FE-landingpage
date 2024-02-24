import React from 'react'
import footerLogo from '../../assets/img/footer-logo.png'

const Footer:React.FC = () => {
    return (
        <div>
            <footer className='h-230 bg-black flex'>
                <div className='flex items-center ml-20'>
                    <img src={footerLogo} className='w-110 h-110' alt="" />
                    <div className=' w-373 h-65 ml-8'>
                        <h1 className='text-white text-2xl font-bold'>DUMBWAYS.ID</h1>
                        <p className='text-white text-base'>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                    </div>
                </div>
            </footer>
            <div className='flex h-2 bg-white '>
            </div>
            <div className='flex h-56 bg-black '>
                <p className='text-white text-xl mx-auto flex justify-center items-center'>Komisi Pemilihan Umum DumbWays.ID | yourname 2023</p>
            </div>
        </div>
    )
}

export default Footer