import React from 'react'
import section from '../../assets/img/section.png'

const Section: React.FC = () => {
    return (
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
    )
}

export default Section