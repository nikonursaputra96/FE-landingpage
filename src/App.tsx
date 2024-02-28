import React from 'react'
import {Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Vote from './pages/Vote'
import Detail from './pages/Detail'
import ModalRegister from './component/Modal/ModalRegister'
import ModalVote from './component/Modal/ModalVote'
import Admin from './pages/Admin'
import ListPaslon from './pages/ListPaslon'
import ListPartai from './pages/ListPartai'
import AddPartai from './pages/AddPartai'
import AddPaslon from './pages/AddPaslon'
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Auth from './interfaces/Auth'
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import ModalLogin from './component/Modal/ModalLogin'

const App: React.FC = () => {

  const navigate = useNavigate()

  const [formLogin, setFormLogin] = useState<Auth>({
    username: '',
    password: ''
  })

  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isLoginAdmin, setIsLoginAdmin] = useState<boolean>(false)

  function handleSetForm(event: ChangeEvent<HTMLInputElement>) : void {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value
    })
  }

  function login(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(formLogin.username === "admin" && formLogin.password === "admin") {
      setIsLoginAdmin(true)
    } else if(formLogin.username !== "" && formLogin.password !== "" && formLogin.username !== "admin" && formLogin.password !== "admin" ) {
      setIsLogin(true)
    }
  }

  function PrivateRoute() {
    if (isLogin) {
      return <Outlet />
    } else {
      return <Navigate to='/login' />
    }
  }

  function PrivateRouteAdmin() {
    if (isLoginAdmin) {
      return <Outlet />
    } else {
      return <Navigate to='/login' />
    }
  }


  useEffect(() => {
    if (isLogin) {
      navigate('/')
    }
  }, [isLogin])

  useEffect(() => {
    if(isLoginAdmin) {
      navigate('/admin')
    }
  }, [isLoginAdmin])

  return (

      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/vote' element={<Vote />} />
        <Route path='/detail' element={<Detail />} />
        

        <Route path='/login' element={<ModalLogin handle={handleSetForm} login={login} />} />
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route path='/' element={<PrivateRouteAdmin/>}>
          <Route path='/admin' element={<Admin/>}/>
        </Route>


        <Route path='/register' element={<ModalRegister />} />
        <Route path='/modalvote' element={<ModalVote />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/paslon' element={<ListPaslon />} />
        <Route path='/partai' element={<ListPartai />} />
        <Route path='/add-partai' element={<AddPartai />} />
        <Route path='/add-paslon' element={<AddPaslon />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path="/" element={<PrivateRouteAdmin />}>
          <Route path='/admin' element={<Admin />} />
        </Route>

      </Routes>


  )
}

export default App
