import { useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectList = props => {
    
    const {project, setProject} = props;

    useEffect( () => {
        axios.get("http://localhost:8000/api/project")
            .then( res => {
                console.log(res.data)
                setProject(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        project.length > 0 && project.map( (p, i) => {
            return (
                <div key={i} >
                    <Link to={`/api/project/${p._id}`}> {p.title} </Link>
                </div>
            )
        })
    )
}

export default ProjectList;