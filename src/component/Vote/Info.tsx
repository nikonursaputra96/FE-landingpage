
import Votes from '../../interfaces/Vote'
import { useEffect, useState } from 'react'

const Info = () => {
    
    const [voters, setVoters] = useState<Votes[]> ([])
    const [index, setIndex] = useState<number> (0)

    useEffect(() => {
        const getDataPaslon = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/v1/paslons")
                const data = await response.json()
      
                setVoters(data)
            } catch (error) {
                throw error
            }
        }
        getDataPaslon()
    },[])
   

    const handleNext = () => {
        if (index < voters.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }


    const handleBack = () => {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex (voters.length - 1)
        }
    }
    
    return (
        <div className=' bg-grey '>
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold text-yellowdark text-center pt-12 mt-28 mb-16'>INFO PASLON</h1>
            </div>
            <div className='flex justify-center items-center mb-20 px-6'>
                <button onClick={handleBack} className=' lg:ml-24 lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-white lg:text-3xl text-center gap-0 text-gray-400'>&lt;</button>

                {voters.length > 0 && 
                     (
                            <div key={index} className='bg-white lg:w-947 lg:h-494 w-[450px] lg:flex mx-auto rounded-xl shadow-lg shadow-gray-500 '>
                            <img src={voters[index].image} alt="" className='w-246 h-328 mt-10 mx-auto mb-10' />
                            <div className=' ml-3.5'>
                                    <div className='leading-tight mt-7'>
                                        <p className='lg:text-2xl text-xl font-bold'>Nomor Urut:{voters[index].number}</p>
                                        <p className='uppercase lg:text-4xl text-3xl font-bold text-reddark-2'>{voters[index].name}</p>
                                    </div>
                                    <p className='lg:text-2xl text-xl mt-4'>Visi & Misi :</p>
                                    <ul className='list-disc lg:text-2xl text-xl ml-8 leading-tight'>
                                        <li>
                                            {voters[index].vismis[0]}
                                        </li>
                                        <li>
                                            {voters[index].vismis[1]}
                                        </li>
                                        <li>
                                            {voters[index].vismis[2]}
                                        </li>
                                    </ul>
                                    <p className='lg:text-2xl text-xl mt-4'>Koalisi :</p>
                                    <ul className='list-disc lg:text-2xl text-xl ml-8 pb-10 leading-tight'>
                                        <li>
                                            {voters[index].coalition[0]}
                                        </li>
                                        <li>
                                            {voters[index].coalition[1]}
                                        </li>
                                        <li>
                                            {voters[index].coalition[2]}
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    )}
                        
       

                <button onClick={handleNext} className=' lg:ml-24 lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-white lg:text-3xl text-center gap-0 text-gray-400'>&gt;</button>
            </div>

            <aside className='bg-white h-384 mt-16 flex'>
                <p className=' font-bold lg:text-41 text-3xl text-center flex justify-center items-center text-red'>PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT</p>
            </aside>


        </div>
    )
}

export default Info