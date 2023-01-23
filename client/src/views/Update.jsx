import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import DeleteButton from "../components/DeleteButton";

const Update = props => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navi = useNavigate();

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/project/' + id)
            .then(res => {
                setProject(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const updateProject = projectParam => {
        axios.put(`http://localhost:8000/api/project/${id}`, projectParam)
            .then(res => {
                console.log(res);
                navi('/')
            })
            .catch(err => {
                console.log(err)
                const errorRes = err.response.data.error.errors;
        const errorArr = [];
        for (const key of Object.keys(errorRes)) {
            errorArr.push(errorRes[key].message)
        }
        setErrors(errorArr);
            }
            )
    }

    return (
        <div>
            <h1>Update Project :3</h1>
            <div>
                {errors.length > 0 && errors.map((error, i) => (
                    <p key={i}> {error} </p>
                ))}
            </div>
            {
                loaded && (
                    <>
                        <ProjectForm onSubmitProp={updateProject} initialTitle={project.title} initialPrice={project.price} initialDescription={project.description} />
                        <DeleteButton projectId={project._id} successCallBack={() => navi('/')} />
                    </>
                )
            }

        </div>
    )
}

export default Update;