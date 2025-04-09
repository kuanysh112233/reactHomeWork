import React from 'react'
import './App.css'
import LanguageProvider from './components/LanguageProvider'
import Test from './components/Test'

export default function App() {

  return (
    <>
    <LanguageProvider>
      <div>
        <h1>Home Word useContext</h1>
        <Test/>
      </div>
    </LanguageProvider>
    </>
  )
}


