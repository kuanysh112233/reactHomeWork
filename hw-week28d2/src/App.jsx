import { useState } from 'react'
import {BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projekt from './pages/Projekt'
import ProjectDatail from './pages/ProjectDatail'
import AboutMe from './pages/AboutMe'
import NavBar from './companend/navbar'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projekt/>}/>
        <Route path="/projects/:id" element={<ProjectDatail/>}/>
        <Route path="/about" element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

