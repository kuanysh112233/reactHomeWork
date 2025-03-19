import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyProfile () {
  const navi = useNavigate()
  const hanClick = () =>{
    navi("/projects")
  }
  return (
    <div>
      <h1>Мой Данные</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr38t7o3k74y3Nx63hafgtbRVTBn3KdDso6bB_zzZ3wBx3-CI4-9CM-ZKnLY8s4rjtj4U&usqp=CAU"/>
      <p>Имя: Төкен Қуаныш Амангелдіұлы </p>
      <p>Email: tkuanys767@gmail.com</p>
      <p>Академия:Amjil Cyber School</p>
      <button onClick={hanClick}>About Me</button>

    </div>
  )
}
