import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutMe() {
  const navi = useNavigate()
  const hanClick = () =>{
    navi("/profil")
  }
  return (
    <div>
      <h1>Обо Мне</h1>
      <h3>Лучший Отец , Верный Друг , Хороший Работник  и так далия...................</h3>
      <button onClick={hanClick}>My Projects</button>
    </div>
  )
}
