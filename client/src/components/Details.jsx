import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Details = props => {
    const [project, setProject] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get(`http://localhost:8000/api/project/${id}`)
            .then(res => {
                console.log(res.data);
                setProject(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <p>{project.title}</p>
            <p>{project.price}</p>
            <p>{project.description}</p>

            <Link to={'/project'}>Go Home</Link>
            <Link to={'/project/edit/' + id}>Edit</Link>
        </div>
    )
}

export default Details;