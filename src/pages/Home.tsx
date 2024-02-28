import React, { useState } from 'react'
import Navbar from '../component/Home/Navbar'
import Header from '../component/Home/Header'
import Section from '../component/Home/Section'
import Aside from '../component/Home/Aside'
import Footer from '../component/Home/Footer'
import HomeNews from '../lib/HomeNews.json'
import IHome from '../interfaces/IHome'


const Home: React.FC = () => {

  const [home] = useState<IHome[]>(HomeNews)
  return (
    <div className='bg-grey'>
      <Navbar />
      
      <Header />
      <div className='flex-wrap flex justify-center items-center gap-4 mt-12 px-6'>
      {home && home.map ((data:IHome, id:number) => {

        return (
          <div key={id}>
            <Section
            id = {data.id}
             image = {data.image}
             date = {data.date}
             title = {data.title}
             author = {data.author}
             detail = {data.detail}
            />
          </div>
        )
      })}
      </div>
      <Aside />
      <Footer />
    </div>

  )
}

export default Home