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
      
      </Routes>
    </Router>

  )
}

export default App
