import { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const Main = props => {
    const [project, setProject] = useState([]);

    return (
        <div>
            <ProjectForm project = {project} setProject = {setProject}/>
            <hr />
            <h2>All Products:</h2>
            <ProjectList project = {project} setProject = {setProject}/>
        </div>
    )
}

export default Main;