import React from 'react'
import modalvote from '../../lib/ModalVote.json'

const ModalVote: React.FC = () => {
    return (
        <div className='container'>
            <h1 className='font-black lg:text-5xl text-3xl pt-10 text-bottomvote text-center'>MASUKKAN PILIHANMU</h1>
        <div className='flex flex-wrap mt-12 gap-6 justify-center items-center'>
            
            {modalvote && modalvote.map((modal, index) => {
                return (
                    <div className='mx-auto' key={index}>

                        {index === 0 && (
                            <div className='w-347 h-388 drop-shadow-lg bg-cardcolor rounded-2xl'>
                                <div className='flex justify-end'>
                                    <button className='absolute w-90 h-90 rounded-full bg-reddark text-white border-2 border-white text-3xl font-bold'>{modal.id}</button>
                                </div>
                                <div className='flex-col flex'>
                                    <img src={modal.image} alt="" className='w-301 h-189 mx-auto mt-6' />
                                    <p className='text-2xl text-bottomvote font-bold text-shadow mt-3 mx-6 '>{modal.name}</p>
                                    <p className='text-base mx-6'>{modal.vismis}</p>
                                    <p className='text-base mx-6 font-bold mt-3'>Partai Pengusung :</p>
                                    <ul className='text-base list-disc mx-8 list-inside leading-tight'>
                                        <li>
                                            {modal.partai[0]}
                                        </li>
                                        <li>
                                            {modal.partai[1]}
                                        </li>
                                        <li>
                                            {modal.partai[2]}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {index === 1 && (
                            <div className='w-347 h-388 drop-shadow-lg bg-cardcolor-2 rounded-2xl'>
                                <div className='flex justify-end'>
                                    <button className='absolute w-90 h-90 rounded-full bg-cardcolor-3 text-white border-2 border-white text-3xl font-bold'>{modal.id}</button>
                                </div>
                                <div className='flex-col flex'>
                                    <img src={modal.image} alt="" className='w-301 h-189 mx-auto mt-6' />
                                    <p className='text-2xl text-bottomvote font-bold text-shadow mt-3 mx-6 '>{modal.name}</p>
                                    <p className='text-base mx-6'>{modal.vismis}</p>
                                    <p className='text-base mx-6 font-bold mt-3'>Partai Pengusung :</p>
                                    <ul className='text-base list-disc mx-8 list-inside leading-tight'>
                                        <li>
                                            {modal.partai[0]}
                                        </li>
                                        <li>
                                            {modal.partai[1]}
                                        </li>
                                        <li>
                                            {modal.partai[2]}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {index === 2 && (
                            <div className='w-347 h-388 drop-shadow-lg bg-cardcolor-2 rounded-2xl'>
                                <div className='flex justify-end'>
                                    <button className='absolute w-90 h-90 rounded-full bg-cardcolor-3 text-white border-2 border-white text-3xl font-bold'>{modal.id}</button>
                                </div>
                                <div className='flex-col flex'>
                                    <img src={modal.image} alt="" className='w-301 h-189 mx-auto mt-6' />
                                    <p className='text-2xl text-bottomvote font-bold text-shadow mt-3 mx-6 '>{modal.name}</p>
                                    <p className='text-base mx-6'>{modal.vismis}</p>
                                    <p className='text-base mx-6 font-bold mt-3'>Partai Pengusung :</p>
                                    <ul className='text-base list-disc mx-8 list-inside leading-tight'>
                                        <li>
                                            {modal.partai[0]}
                                        </li>
                                        <li>
                                            {modal.partai[1]}
                                        </li>
                                        <li>
                                            {modal.partai[2]}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                    </div>
                
                )
            })}


        </div>
            <div className='py-10 px-6 flex justify-center items-center'>
                <button className='lg:mr-6  lg:w-498 lg:h-63 w-[200px] h-[40px] rounded-2xl border-4 mr-3 border-bottomvote text-bottomvote text-center lg:text-3xl font-bold'>RESET</button>
                <button className='lg:ml-6  lg:w-503 lg:h-68 rounded-2xl w-[200px] h-[40px] bg-bottomvote ml-3 text-white text-center lg:text-3xl font-bold'>SUBMIT</button>
            </div>
        </div>
    )
}

export default ModalVote