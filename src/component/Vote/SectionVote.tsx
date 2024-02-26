import React from 'react'
import '../../../src/index.css'
import { useState } from 'react'
import Vote from '../../lib/Vote.json'


const SectionVote: React.FC = () => {

  const [vote, setVote] = useState<any>(false)

  const toVote = (): void => {
    setVote(!vote)
  }
  return (

    <div className='container bg-white'>
        <h1 className='lg:text-5xl text-3xl font-bold text-yellowdark selection text-center pt-16'>INFO PEMILU TERUPDATE</h1>
        <div className=' container flex '>
          {/* <div className=' mt-24 ml-24 text-2xl font-bold'>Hasil :</div> */}
          <div className=' flex items-center justify-center mx-auto mt-28'>
            <div className='flex justify-center items-center mx-auto'>
              <section>

                {Vote.map && Vote.map((votes, index) => {
                  return (
                    <div className='' key={index}>

                      {index === 0 && (
                        <div className='bg-reddark lg:w-657 h-146 w-[350px] flex items-center rounded-2xl shadow-lg shadow-rose-400 mb-4'>
                          <div className='ml-6 bg-reddark-2 w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col '>
                            <p className='text-base'>No. Paslon</p>
                            <p className='text-3xl'>{votes.nomor}</p>
                          </div>
                          <div className=' lg:ml-8 ml-4 text-reddark-2 font-black text-shadow '>
                            <p className='lg:text-41 text-2xl leading-tight tracking-tight'>{votes.name}</p>
                            <p className='lg:text-4xl text-2xl '>{votes.hasil}</p>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className='bg-orangedark lg:w-657 h-146 w-[350px] flex items-center rounded-2xl shadow-lg shadow-gray-400 mb-4'>
                          <div className='ml-6 bg-orangedark-2 w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col '>
                            <p className='text-base'>No. Paslon</p>
                            <p className='text-3xl'>{votes.nomor}</p>
                          </div>
                          <div className=' lg:ml-8 ml-4 text-orangedark-2 font-black text-shadow '>
                            <p className='lg:text-41 text-2xl leading-tight tracking-tight'>{votes.name}</p>
                            <p className='lg:text-4xl text-2xl '>{votes.hasil}</p>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className='bg-bluedark lg:w-657 h-146 w-[350px] flex items-center rounded-2xl shadow-lg shadow-cyan-300 '>
                          <div className='ml-6 bg-greendark w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col '>
                            <p className='text-base'>No. Paslon</p>
                            <p className='text-3xl'>{votes.nomor}</p>
                          </div>
                          <div className=' lg:ml-8 ml-4 text-greendark font-black text-shadow '>
                            <p className='lg:text-41 text-2xl leading-tight tracking-tight'>{votes.name}</p>
                            <p className='lg:text-4xl text-2xl '>{votes.hasil}</p>
                          </div>
                        </div>
                      )}


                    </div>
                  )
                })}



                <div className='flex mt-20 justify-center items-center mx-auto'>
                  <div onClick={toVote} >{vote ? <p className='text-red font-bold lg:text-3xl text-2xl'>ANDA SUDAH MEMILIH !!!! </p> : <button className='bg-bottomvote lg:w-466 h-47 w-[350px] text-white font-bold lg:text-3xl text-2xl rounded-xl'>MASUKKAN SUARAMU</button>} </div>
                </div>

              </section>
            </div>

          </div>
        </div>

  

    </div>
  )
}

export default SectionVote