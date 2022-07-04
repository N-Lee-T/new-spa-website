import React from 'react';
import ProjectRow from './ProjectRow';

function ProjectTable({ projects }) {
    return (
        <div className='ProjectTable'>
            <table>
                <thead>
                    <th>name</th>
                    <th>completed?</th>
                </thead>
                <tbody>
                    {projects.map((project, i) => <ProjectRow project={project} key={i}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectTable;