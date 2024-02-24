import React from 'react'
import monkeycard from '../../assets/img/monkeycard.png'

const ModalVote: React.FC = () => {
    return (
        <div>
            <h1 className='font-black text-5xl pt-10 text-bottomvote text-center'>MASUKKAN PILIHANMU</h1>
            <div className='flex gap-5 justify-center items-center mt-12 '>
                <div className='w-347 h-388 drop-shadow-lg bg-cardcolor rounded-2xl'>
                    <div className='flex justify-end'>
                        <button className='absolute w-90 h-90 rounded-full bg-reddark text-white border-2 border-white text-3xl font-bold'>1</button>
                    </div>
                    <div className='flex-col flex'>
                        <img src={monkeycard} alt="" className='w-301 h-189 mx-auto mt-6' />
                        <p className='text-2xl text-bottomvote font-bold text-shadow mt-3 mx-6 '>CINTARA SURYA PALOH</p>
                        <p className='text-base mx-6'>Memindahkan Indonesia ke Isekai</p>
                        <p className='text-base mx-6 font-bold mt-3'>Partai Pengusung :</p>
                        <ul className='text-base list-disc mx-8 list-inside leading-tight'>
                            <li>
                                Partai persatuan monyet
                            </li>
                            <li>
                                Partai sapi perah indonesia
                            </li>
                            <li>
                                Partai pisang masak
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-347 h-388 drop-shadow-lg bg-cardcolor-2 rounded-2xl'>
                    <div className='flex justify-end'>
                        <button className='absolute w-90 h-90 rounded-full bg-cardcolor-3 text-white border-2 border-white text-3xl font-bold'>2</button>
                    </div>
                    <div className='flex-col flex'>
                        <img src={monkeycard} alt="" className='w-301 h-189 mx-auto mt-6' />
                        <p className='text-2xl text-bottomvote font-bold text-shadow mt-3 mx-6 '>CINTARA SURYA PALOH</p>
                        <p className='text-base mx-6'>Memindahkan Indonesia ke Isekai</p>
                        <p className='text-base mx-6 font-bold mt-3'>Partai Pengusung :</p>
                        <ul className='text-base list-disc mx-8 list-inside leading-tight'>
                            <li>
                                Partai persatuan monyet
                            </li>
                            <li>
                                Partai sapi perah indonesia
                            </li>
                            <li>
                                Partai pisang masak
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-347 h-388 drop-shadow-lg bg-cardcolor-2 rounded-2xl'>
                    <div className='flex justify-end'>
                        <button className='absolute w-90 h-90 rounded-full bg-cardcolor-3 text-white border-2 border-white text-3xl font-bold'>3</button>
                    </div>
                    <div className='flex-col flex'>
                        <img src={monkeycard} alt="" className='w-301 h-189 mx-auto mt-6' />
                        <p className='text-2xl text-bottomvote font-bold text-shadow mt-3 mx-6 '>CINTARA SURYA PALOH</p>
                        <p className='text-base mx-6'>Memindahkan Indonesia ke Isekai</p>
                        <p className='text-base mx-6 font-bold mt-3'>Partai Pengusung :</p>
                        <ul className='text-base list-disc mx-8 list-inside leading-tight'>
                            <li>
                                Partai persatuan monyet
                            </li>
                            <li>
                                Partai sapi perah indonesia
                            </li>
                            <li>
                                Partai pisang masak
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-12 mt-12'>
                <button className='w-498 h-63 rounded-2xl border-4 border-bottomvote text-bottomvote text-center text-3xl font-bold'>RESET</button>
                <button className='w-503 h-68 rounded-2xl bg-bottomvote text-white text-center text-3xl font-bold'>SUBMIT</button>
            </div>
        </div>
    )
}

export default ModalVote