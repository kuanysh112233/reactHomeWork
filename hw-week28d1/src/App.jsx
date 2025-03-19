import { useState } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MyProfile from './pages/MyProfile '
import MyProjects from './pages/MyProjects'
import AboutMe from './pages/AboutMe'
import NavBar from './companent/NavBar'

export default function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/profil' element={<MyProfile/>}/>
      <Route path='/projects' element={<MyProjects/>}/>
      <Route path='/about' element={<AboutMe/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}


