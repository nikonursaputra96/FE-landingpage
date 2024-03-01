import { useNavigate } from 'react-router-dom'
import IHome from '../../interfaces/IHome'

const Section = (news:IHome) => {


    const navigate = useNavigate()
    return (
    
        <section className='flex'>
                    <div>
                        {news.id === 1 && (
                        <div className=' lg:w-753 lg:h-421 bg-center bg-image cursor-pointer h-[421px] overflow-hidden' onClick={() => navigate('/detail')}>
                            <button className='bg-red w-232 h-47 rounded-xl text-white font-bold text-xl mt-72 ml-4'>{news.date}</button>
                            <h1 className='font-bold text-3xl text-white ml-4'>{news.title}</h1>
                            <p className='text-white text-2xl ml-4'>{news.author}</p>
                        </div>
                        )}

                        {news.id > 1 && (

                        <div className=' cursor-pointer w-367 h-421 bg-white' onClick={() => navigate('/detail')}>
                            <img src={news.image} className='' alt="" />
                            <button className='bg-red w-217 h-47 rounded-xl text-white font-bold text-xl mt-4 ml-4'>{news.date}</button>
                            <h1 className='font-bold text-3xl mt-3 ml-4'>{news.title}</h1>
                            <p className='text-2xl ml-4'>{news.author}</p>
                        </div>
                        )}

                    </div>

        </section>
    )
}

export default Section