import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeNews from '../../lib/HomeNews.json'

const Section: React.FC = () => {

    const navigate = useNavigate()
    return (

        
        <section className='flex-wrap flex justify-center items-center gap-6 mt-12'>
            {HomeNews && HomeNews.map((news, index) => {
                return (
                    <div key={index} >
                        {index === 0 && (
                        <div className=' w-753 h-421 bg-image cursor-pointer' onClick={() => navigate('/detail')}>
                            <button className='bg-red w-232 h-47 rounded-xl text-white font-bold text-xl mt-72 ml-4'>{news.date}</button>
                            <h1 className='font-bold text-3xl text-white ml-4'>{news.title}</h1>
                            <p className='text-white text-2xl ml-4'>{news.author}</p>
                        </div>
                        )}

                        {index > 0 && (

                        <div className=' w-367 h-421 bg-white'>
                            <img src={news.image} className='' alt="" />
                            <button className='bg-red w-217 h-47 rounded-xl text-white font-bold text-xl mt-3 ml-4'>Senin, 03 JAN 2023</button>
                            <h1 className='font-bold text-3xl mt-3 ml-4'>KPU TETAPKAN 3 MENTOR TERBAIK</h1>
                            <p className='text-2xl ml-4'>Super Admin</p>
                        </div>
                        )}

                    </div>

                )
            })}

        </section>
    )
}

export default Section