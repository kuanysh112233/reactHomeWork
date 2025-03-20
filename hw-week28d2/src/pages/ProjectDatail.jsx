import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    { id: 1, title: 'Project 1', description: '1' },
    { id: 2, title: 'Project 2', description: '2' },
    { id: 3, title: 'Project 3', description: '3' },
  ];

export default function ProjectDatail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
  
    useEffect(() => {
      const foundProject = projectsData.find((p) => p.id === parseInt(id));
      setProject(foundProject);
    }, [id]);
  
    if (!project) {
      return <div>Loading...</div>;
    }
  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.details}</p>
      <Link to="/projects">Back to Projects</Link>
    </div>
  )
}
