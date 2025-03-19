import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyProjects() {
  const navi = useNavigate()
    const hanClick = () =>{
      navi("/about")
    }
  return (
    <div>
      <h1>Мои Проекты</h1>
      <ul>
        <li>
          <h3>1 Проекты</h3>
          <p>1 Проекты</p>
        </li>
        <li>
          <h3>2 Проекты</h3>
          <p>2 Проекты</p>
        </li>
      </ul>
      <button onClick={hanClick}>My Profile</button>
    </div>
  )
}
