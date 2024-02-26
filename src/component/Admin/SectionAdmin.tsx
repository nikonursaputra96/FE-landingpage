import React from 'react'
import AdminSection from '../../lib/AdminSection.json'

const SectionAdmin: React.FC = () => {
    return (
        <div className='container'>
            <h1 className='text-bottomvote lg:text-5xl text-4xl font-black m-12 text-center'>DASHBOARD</h1>
            <div className='flex flex-wrap mx-auto px-2'>  
            
            {
                AdminSection && AdminSection.map((adminsection, index) => {
                    return (
                        <div key={index} className=' mx-auto mb-24'>
                            <div className='mt-6 flex justify-center items-center'>
                                {index === 0 && (
                                <p className='w-73 h-73 bg-admincard-1 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-1-1 border-8 border-admincard-1-1'>{index+1}</p>
                                )}

                                {index === 1 && (
                                    <p className='w-73 h-73 bg-admincard-2 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-2-1 border-8 border-admincard-2-1'>{index+1}</p>
                                )}

                                {index === 2 && (
                                    <p className='w-73 h-73 bg-admincard-3 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-3-1 border-8 border-admincard-3-1'>{index+1}</p>
                                    )}
                            
                            </div>

                            <section className='flex justify-around'>
                            {index === 0 && (
                                <div className=' flex justify-around '>

                                <div className='bg-admincard-1 shadow-md shadow-black rounded-2xl lg:w-367 w-[345px] h-410 flex flex-col mt-6'>
                                    <img src={adminsection.image} alt="" className='lg:w-330 w-[300px] h-262 mx-auto mt-6' />
                                    <div className='ml-4  text-admincard-1-1 text-shadow '>
                                        <p className='text-4xl text-shadow font-black mt-3'>{adminsection.nama}</p>
                                        <p className='font-bold text-xl mt-3'>Akumulasi :{adminsection.akumulasi}</p>
                                        <p className='font-bold text-xl'>Jumlah Vote :{adminsection.jumlahvote}</p>
                                    </div>
                                </div>
                                </div>
                            )}

                            {index === 1 && (
                                <div className='bg-admincard-2 shadow-md shadow-black rounded-2xl lg:w-367 w-[345px] h-410 flex flex-col mt-6'>
                                <img src={adminsection.image} alt="" className='lg:w-330 w-[300px] h-262 mx-auto mt-6' />
                                <div className='ml-4 text-shadow text-admincard-2-1'>
                                    <p className='text-4xl font-black mt-3'>{adminsection.nama}</p>
                                    <p className='mt-3 text-xl font-bold'>Akumulasi :{adminsection.akumulasi}</p>
                                    <p className='text-xl font-bold'>Jumlah Vote : {adminsection.jumlahvote}</p>
                                </div>
                            </div>
                            )}

                            {index === 2 && (
                                <div className='bg-admincard-3 shadow-md shadow-black rounded-2xl lg:w-367 w-[345px] h-410 flex flex-col mt-6'>
                                <img src={adminsection.image} alt="" className='lg:w-330 w-[300px] mx-auto mt-6' />
                                <div className='ml-4 text-admincard-3-1 text-shadow'>
                                    <p className='text-4xl font-black mt-3'>{adminsection.nama}</p>
                                    <p className='font-bold text-xl mt-3'>Akumulasi :{adminsection.akumulasi}</p>
                                    <p className='font-bold text-xl'>Jumlah Vote :{adminsection.jumlahvote}</p>
                                </div>
                            </div>
                            )}
                            </section>
                                
                                
                        </div>
                    )
                })
            }

            </div>

        </div>
    )
}

export default SectionAdmin