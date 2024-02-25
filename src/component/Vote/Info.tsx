import React from 'react'
import InfoPaslon from '../../lib/InfoPaslon.json'

const Info: React.FC = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-yellowdark text-center mt-28 mb-16'>INFO PASLON</h1>
            </div>
            <div className='flex justify-center items-center mb-20'>
                <button className=' ml-24 w-12 h-12 rounded-full bg-white text-3xl text-center items-center flex justify-center text-gray-400'>&lt;</button>

                {InfoPaslon && InfoPaslon.map((info, index) => {
                    return (
                        <div key={index} className='bg-white w-947 h-494 flex mx-auto rounded-xl shadow-lg shadow-gray-500 justify-center items-center'>
                            <img src={info.image} alt="" className='w-246 h-328' />
                            <div className='ml-10'>
                                    <div className='leading-tight'>
                                        <p className='text-2xl font-bold'>Nomor Urut:{info.nomor}</p>
                                        <p className='text-4xl font-bold text-reddark-2'>{info.name}</p>
                                    </div>
                                    <p className='text-2xl mt-4'>Visi & Misi :</p>
                                    <ul className='list-disc text-2xl ml-8 leading-tight'>
                                        <li>
                                            {info.vismis[0]}
                                        </li>
                                        <li>
                                            {info.vismis[1]}
                                        </li>
                                        <li>
                                            {info.vismis[2]}
                                        </li>
                                    </ul>
                                    <p className='text-2xl mt-4'>Koalisi :</p>
                                    <ul className='list-disc text-2xl ml-8 leading-tight'>
                                        <li>
                                            {info.koalisi[0]}
                                        </li>
                                        <li>
                                            {info.koalisi[1]}
                                        </li>
                                        <li>
                                            {info.koalisi[2]}
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    )
                })}


                <button className=' mr-24 w-12 h-12 rounded-full bg-white text-3xl text-center items-center flex justify-center text-gray-400'>&gt;</button>
            </div>

            <aside className='bg-white h-384 mt-16 flex'>
                <p className=' font-bold text-41 text-center flex justify-center items-center text-red'>PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT</p>
            </aside>


        </div>
    )
}

export default Info