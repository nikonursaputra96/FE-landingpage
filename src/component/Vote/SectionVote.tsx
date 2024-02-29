import React from 'react'
import '../../../src/index.css'
import { useState } from 'react'
import Vote from '../../lib/Vote.json'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip,Title,ArcElement,Legend } from 'chart.js'
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const SectionVote: React.FC = () => {

  Chart.register(ChartDataLabels);

  ChartJS.register (
    Tooltip,Title,ArcElement,Legend
  )
  
  const [userData] = useState<any>({
    datasets: [{
      label: 'Hasil',
      data: Vote.map((data) => data.hasil),
      backgroundColor: ['rgba(255, 99, 132, 1)','rgba(255, 205, 86, 1)','rgba(54, 162, 235, 1)'],
      datalabels: {
        color : '#000',
        formatter: function(value:number) {
          return  value + '%'
        },
        font: {
          size: 24,
          weight: 'bold'
        },
      }
    }]
  })


 

 
  const [vote, setVote] = useState<any>(false)

  const toVote = (): void => {
    setVote(!vote)
  }
  return (

    <div className='container bg-white'>
        <h1 className='lg:text-5xl text-3xl font-bold text-yellowdark selection text-center pt-16'>INFO PEMILU TERUPDATE</h1>
        <div className=' container flex '>

          <div className=' flex items-center justify-center mx-auto mt-28 flex-wrap'>
          <div className='w-[377px] h-[368px] lg:mr-24  mb-48'>
            <p className='font-bold text-4xl text-center mb-5 '>HASIL :</p>
            <Pie data={userData}/>
          </div>
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
                            <p className='lg:text-4xl text-2xl '>{votes.hasil}%</p>
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
                            <p className='lg:text-4xl text-2xl '>{votes.hasil}%</p>
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
                            <p className='lg:text-4xl text-2xl '>{votes.hasil}%</p>
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