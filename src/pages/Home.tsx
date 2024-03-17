import React, { useState } from 'react'
import Navbar from '../component/Home/Navbar'
import Header from '../component/Home/Header'
import Section from '../component/Home/Section'
import Aside from '../component/Home/Aside'
import Footer from '../component/Home/Footer'
import IHome from '../interfaces/IHome'
import { useEffect } from 'react'


const Home: React.FC = () => {

  const [home,setHome] = useState<IHome[]>([])

  useEffect (() => {
    const getDataArticle = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/blogs')
        const data = await response.json()

        setHome (data)
      } catch(error) {
        throw error
      }
     
    }

    getDataArticle()
  },[])
  
  return (
    <div className='bg-grey'>
      <Navbar />
      
      <Header />
      <div className='flex-wrap flex justify-center items-center gap-4 mt-12 px-6'>
      {home && home.map ((data:IHome, id:number) => {

        return (
          <div key={id}>
            <Section
            idBlog = {data.idBlog}
             image = {data.image}
             date = {data.date}
             title = {data.title}
             author = {data.author}
             content = {data.content}
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