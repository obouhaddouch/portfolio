import React from 'react';

import Project from '../components/Project';
import { Container } from 'react-bootstrap';
import data from '../ProjectsData';

import ProgramminSkills from '../components/ProgramminSkills';


const Projects = () => {

    const projects = data;

    return (

        <>
           
            <Container className='container '>

                <h2 className="projects-title">
                    Vaardigheden
                </h2>

                <div className='s-container'>

                    <ProgramminSkills/> 
                </div>

                
            </Container>

            <Container className='container'>
               

                <h2 className="projects-title">
                    Projecten
                </h2>

                <div className='projects'>

                    {projects.map(project => <Project src={project.image} alt={project.alt} name={project.name} description={project.description} link={project.link} />)}

                </div>

            </Container>

        </>

    )
}

export default Projects;
