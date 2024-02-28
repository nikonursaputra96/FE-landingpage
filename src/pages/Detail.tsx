import React from 'react'
import DetailComponent from '../component/Detail/DetailComponent'
import Navbar from '../component/Home/Navbar'
import Footer from '../component/Home/Footer'
import DetailNews from '../lib/DetailNews.json'
import IHome from '../interfaces/IHome'
import { useState } from 'react'

const Detail:React.FC = () => {

  const [detail] = useState<IHome[]>(DetailNews)

  return (
    <div>
        <Navbar/>

        {detail && detail.map((data:IHome, id:number) => {
          return(
            <div key={id}>
              <DetailComponent
              id = {data.id}
              image = {data.image}
              date = {data.date}
              title = {data.title}
              author = {data.author}
              detail = {data.detail}
              />
            </div>
          )
        } )}
        <Footer/>
    </div>
  )
}

export default Detail