import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Vote from './pages/Vote'
import Detail from './pages/Detail'
import ModalLogin from './component/Modal/ModalLogin'
import ModalRegister from './component/Modal/ModalRegister'
import ModalVote from './component/Modal/ModalVote'
import Admin from './pages/Admin'
import ListPaslon from './pages/ListPaslon'
import ListPartai from './pages/ListPartai'
import AddPartai from './pages/AddPartai'
import AddPaslon from './pages/AddPaslon'

const App: React.FC = () => {


  return (

    <Router>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/vote' element= {<Vote/>} />
        <Route path='/detail' element= {<Detail/>} />
        <Route path='/login' element= {<ModalLogin/>} />
        <Route path='/register' element= {<ModalRegister/>} />
        <Route path='/modalvote' element= {<ModalVote/>} />
        <Route path='/admin' element= {<Admin/>} />
        <Route path='/paslon' element= {<ListPaslon/>} />
        <Route path='/partai' element= {<ListPartai/>} />
        <Route path='/add-partai' element= {<AddPartai/>} />
        <Route path='/add-paslon' element= {<AddPaslon/>} />
      
      </Routes>
    </Router>

  )
}

export default App
