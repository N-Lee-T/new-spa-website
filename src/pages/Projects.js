import React from 'react';
import { Link } from 'react-router-dom';
import ProjectTable from '../components/ProjectTable';

function Projects({projects}) {
    return (
        <>
        <div>
        <h1>Hi, this is the projects page</h1>
        <hr/>
        <ProjectTable projects={projects}/>
        </div>
        </>
    );
}

export default Projects;