import React from 'react';
import projects from 'ProjectList.js';

function ProjectRow({project}) {
    return (
        <tr className='ProjectRow'>
            <td> { project.name } </td>
            <td> { project.complete }</td>
        </tr>
    );
}

export default ProjectRow;