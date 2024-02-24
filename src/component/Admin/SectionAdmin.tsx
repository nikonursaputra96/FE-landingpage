import React from 'react'
import monkeycard from '../../assets/img/monkeycard.png'

const SectionAdmin:React.FC = () => {
  return (
    <div>
        <h1 className='text-bottomvote text-5xl font-black mt-12 text-center'>DASHBOARD</h1>
        <div className='flex justify-around mt-12'>
            <p className='w-73 h-73 bg-admincard-1 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-1-1 border-8 border-admincard-1-1'>1</p>
            <p className='w-73 h-73 bg-admincard-2 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-2-1 border-8 border-admincard-2-1'>2</p>
            <p className='w-73 h-73 bg-admincard-3 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-3-1 border-8 border-admincard-3-1'>3</p>
        </div>

        <div className='bg-admincard-1 shadow-md shadow-black rounded-2xl w-367 h-433 flex'>
            <img src={monkeycard} alt="" className='w-330 h-262 mx-auto mt-6'/>
            <p>SURYA SURYA</p>
            <p></p>
        </div>
    </div>
  )
}

export default SectionAdmin