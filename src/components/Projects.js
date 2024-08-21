import React, { useEffect, useState } from 'react';
import './Projects.css';
import projectsData from '../data/projects.json';
import SpotlightCard from './ProjectCard.js';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Ensure that the projects data is set only once
        if (projects.length === 0) {
            setProjects(projectsData);
        }
    }, [projects]);

    return (
        <div className='Projects'>
            <h2>Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <SpotlightCard key={project.id}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p className='tech'>{project.technology}</p>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
}

export default Projects;