import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = props => {
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navi = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/project/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])

    const updateProject = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/project/${id}`, {
            title,
            price,
            description
        })
            .then( res => {
                console.log(res);
                navi('/project')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update Project :3</h1>
            <form onSubmit={updateProject}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange={ e => setTitle(e.target.value)}  />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <textarea cols="30" rows="2" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </p>
            <button>Update</button>

            </form>

        </div>
    )
}

export default Update;