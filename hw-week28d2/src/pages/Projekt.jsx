import React from 'react'
import { Link } from 'react-router-dom';

const projectsData = [
    { id: 1, title: 'Project 1', description: '1' },
    { id: 2, title: 'Project 2', description: '2' },
    { id: 3, title: 'Project 3', description: '3' },
  ];

export default function Projekt() {
  return (
    <div>
    <h1>Projects</h1>
    <ul>
      {projectsData.map((project) => (
        <li key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link to={`/projects/${project.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
