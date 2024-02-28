import React, { useState } from 'react'
import SectionVote from '../component/Vote/SectionVote'
import Navbar from '../component/Home/Navbar'
import Footer from '../component/Home/Footer'
import Info from '../component/Vote/Info'
import Votes from '../interfaces/Vote'
import VotesInfo from '../lib/InfoPaslon.json'

const Vote:React.FC = () => {

  const [voters] = useState<Votes[]>(VotesInfo)
  return (
    <div>
        <Navbar/>
        <SectionVote/>

        {voters && voters.map((data:Votes , nomor:number) => {
          return(
            <div key={nomor}>
              <Info
              nomor = {data.nomor}
              image = {data.image}
              name =  {data.name}
              vismis = {data.vismis}
              koalisi = {data.koalisi}
              />
            </div>
            )
          })}

        <Footer/>
    </div>
  )
}

export default Vote