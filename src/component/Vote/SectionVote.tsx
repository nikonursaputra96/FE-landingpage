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

    <div>
      <div className='bg-white h-835'>
        <h1 className='text-5xl font-bold text-yellowdark selection text-center pt-16'>INFO PEMILU TERUPDATE</h1>
        <div className='flex'>
          <div className=' mt-28 ml-24 text-2xl font-bold'>Hasil :</div>
          <div className=' w-1082 h-476 flex items-center justify-center mx-auto mt-28'>
            <div className=' flex justify-center items-center'>
              <section>

                {Vote.map && Vote.map((votes, index) => {
                  return (
                    <div key={index}>

                      {index === 0 && (
                        <div className='bg-reddark w-657 h-146 flex items-center rounded-2xl shadow-lg shadow-rose-400 mb-4'>
                          <div className='ml-8 bg-reddark-2 w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col '>
                            <p className='text-base'>No. Paslon</p>
                            <p className='text-3xl'>{votes.nomor}</p>
                          </div>
                          <div className=' ml-8 text-reddark-2 font-black text-shadow '>
                            <p className='text-41 leading-tight tracking-tight'>{votes.name}</p>
                            <p className='text-4xl '>{votes.hasil}</p>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className='bg-orangedark w-657 h-146 flex items-center rounded-2xl shadow-lg shadow-gray-400 mb-4'>
                          <div className='ml-8 bg-orangedark-2 w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col '>
                            <p className='text-base'>No. Paslon</p>
                            <p className='text-3xl'>{votes.nomor}</p>
                          </div>
                          <div className=' ml-8 text-orangedark-2 font-black text-shadow '>
                            <p className='text-41 leading-tight tracking-tight'>{votes.name}</p>
                            <p className='text-4xl '>{votes.hasil}</p>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className='bg-bluedark w-657 h-146 flex items-center rounded-2xl shadow-lg shadow-cyan-300 '>
                          <div className='ml-8 bg-greendark w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col '>
                            <p className='text-base'>No. Paslon</p>
                            <p className='text-3xl'>{votes.nomor}</p>
                          </div>
                          <div className=' ml-8 text-greendark font-black text-shadow '>
                            <p className='text-41 leading-tight tracking-tight'>{votes.name}</p>
                            <p className='text-4xl '>{votes.hasil}</p>
                          </div>
                        </div>
                      )}


                    </div>
                  )
                })}



                <div className='flex mt-20'>
                  <div onClick={toVote} >{vote ? <p className='text-red font-bold text-3xl'>ANDA SUDAH MEMILIH !!!! </p> : <button className='bg-bottomvote w-466 h-47 text-white font-bold text-3xl rounded-xl'>MASUKKAN SUARAMU</button>} </div>
                </div>

              </section>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default SectionVote