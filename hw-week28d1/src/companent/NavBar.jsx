import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/profil">My Profile</Link>
        </li>
        <li>
            <Link to="/projects">My Projects</Link>
        </li>
        <li>
            <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  )
}
