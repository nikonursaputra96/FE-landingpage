import React from 'react'
import Navbar from '../component/Home/Navbar'
import Header from '../component/Home/Header'
import Section from '../component/Home/Section'
import Aside from '../component/Home/Aside'
import Footer from '../component/Home/Footer'


const Home:React.FC = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Section/>
    <Aside/>
    <Footer/>
    </>
  )
}

export default Home