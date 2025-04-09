import React, { useContext } from 'react'
import {LanguageContext} from "./LanguageProvider"

export default function Main() {
    
    const{translations, langIndex, changeLanguage} = useContext(LanguageContext)

  return (
    <div>
      <h2>{translations[0]}</h2>
      <p>{translations[1]}</p>
      <select value={langIndex} onChange={(e)=> changeLanguage(Number(e.target.value))}>
        <option value={0}>ҚАЗАКША</option>
        <option value={1}>РУСКИЙ</option>
        <option value={2}>ENGLISH</option>
      </select>
    </div>
  )
}
