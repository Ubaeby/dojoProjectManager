import { useState } from "react";
import axios from 'axios';

const ProjectForm = (props) => {

    const {project, setProject} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/project', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProject([...project, res.data])
            })
            .catch( err => 
                console.log(err)
            );

        setTitle("");
        setPrice(0);
        setDescription("");
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} placeholder="What's it called?" onChange={ e => setTitle(e.target.value)}  />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <textarea cols="30" rows="2" value={description} placeholder="how does it make you feel?" onChange={e => setDescription(e.target.value)}></textarea>
            </p>
            <button>Create Project!</button>
        </form>
    )

}

export default ProjectForm;