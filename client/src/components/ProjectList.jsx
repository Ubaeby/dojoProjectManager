import { useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectList = props => {
    
    const {removeProject, project, setProject} = props;

    useEffect( () => {
        axios.get("http://localhost:8000/api/project")
            .then( res => {
                console.log(res.data)
                setProject(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteProject = projectId => {
        axios.delete(`http://localhost:8000/api/project/${projectId}`)
            .then(res => {
                removeProject(projectId)
            })
            .catch(err => console.log(err))
    }

    return (
        project.length > 0 && project.map( (p, i) => {
            return (
                <div key={i} >
                    <Link to={`/project/${p._id}`}> {p.title} </Link>
                    <Link to={`/project/edit/${p._id}`}>Edit</Link>
                    <button onClick={ e => {deleteProject(p._id)}}>Remove From My Sight</button>
                </div>
            )
        })
    )
}

export default ProjectList;