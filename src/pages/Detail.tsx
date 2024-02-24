import React from 'react'
import DetailComponent from '../component/Detail/DetailComponent'
import Navbar from '../component/Home/Navbar'
import Footer from '../component/Home/Footer'

const Detail:React.FC = () => {
  return (
    <div className='bg-grey'>
        <Navbar/>
        <DetailComponent/>
        <Footer/>
    </div>
  )
}

export default Detail