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
  const [users, setUsers] = useState<any[]>([])

  // GET DATA
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch ("http://localhost:5000/api/v1/users")
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        throw error
      }
    }
    getData()
  },[])

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
    try {
      const usersSearch = users.find((user) => {
        return user.username === formLogin.username && user.password === formLogin.password})
 
        if (usersSearch) {
          if(formLogin.username === "admin" && formLogin.password === "admin") {
            setIsLoginAdmin(true)
          } else {
            setIsLogin(true)
          }
        } else {
          console.log ('Username / Password tidak cocok')
        }

    } catch (error) {
      throw error
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
      navigate('/')
  }, [isLogin])

  useEffect(() => {
      navigate('/admin')
  }, [isLoginAdmin])

  return (

      <Routes>
        <Route path='/' element={<Home />} />
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

  
      </Routes>


  )
}

export default App
