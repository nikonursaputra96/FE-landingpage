import React from 'react'
import modalvote from '../../lib/ModalVote.json'

const ModalVote: React.FC = () => {
    return (
        <div className='flex justify-center items-center'>
            <h1 className='font-black text-5xl pt-10 text-bottomvote text-center absolute top-2'>MASUKKAN PILIHANMU</h1>
            {modalvote && modalvote.map((modal, index) => {
                return (
                    <div className='mx-auto gap-5 mt-44 flex' key={index}>

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


            <div className='bottom-[-40px] absolute'>
                <button className='mr-6  w-498 h-63 rounded-2xl border-4 border-bottomvote text-bottomvote text-center text-3xl font-bold'>RESET</button>
                <button className='ml-6 w-503 h-68 rounded-2xl bg-bottomvote text-white text-center text-3xl font-bold'>SUBMIT</button>
            </div>
        </div>
    )
}

export default ModalVote