import { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const Main = props => {
    const [project, setProject] = useState([]);
    const removeProject = projectId => {
        setProject(project.filter(p => p._id !== projectId))
    }

    return (
        <div>
            <ProjectForm project = {project} setProject = {setProject}/>
            <hr />
            <h2>All Products:</h2>
            <ProjectList project = {project} setProject = {setProject} removeProject = { removeProject }/>
        </div>
    )
}

export default Main;