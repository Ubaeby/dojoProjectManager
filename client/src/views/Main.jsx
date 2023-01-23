import { useState, useEffect } from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
import axios from 'axios';

const Main = () => {
    const [projectList, setProjectList] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/project')
            .then( res => {
                setProjectList(res.data)
            })
            .catch( err => console.log(err));
    }, []);

    const removeProject = projectId => {
        axios.delete(`http://localhost:8000/api/project/${projectId}`)
            .then(res => {
                setProjectList(projectList.filter(p => p._id !== projectId))
            })
            .catch(err => console.log(err))
    }

    const createProject = projectParam => {
        axios.post('http://localhost:8000/api/project', projectParam)
            .then(res => {
                console.log(res.data)
                setProjectList([...projectList, res.data])
            })
            .catch(err => {
                console.log(err)
                const errorRes = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key].message)
                }
                setErrors(errorArr);
            });
    }

    return (
        <div>
            <h1>Project Creatorinator</h1>
            <div>
            { errors.length > 0 && errors.map( (error, i) => (
                <p key={i}> {error} </p>
                ))}
            </div>
            <ProjectForm errors = {errors} onSubmitProp = {createProject} initialTitle = "" intialPrice = "" intialDescription =""/>
            <hr />
            <h2>All Products:</h2>
            <ProjectList projectList = {projectList} removeProject = { removeProject }/>
        </div>
    )
}

export default Main;