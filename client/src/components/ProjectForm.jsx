import { useState } from "react";

const ProjectForm = (props) => {

    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title: title.charAt(0).toUpperCase() + title.substring(1, title.length - 0), price, description})
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title || ''} placeholder="What's it called?" onChange={ e => setTitle(e.target.value)}  />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" value={price || ''} onChange={e => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <textarea cols="30" rows="2" value={description || ''} placeholder="how does it make you feel?" onChange={e => setDescription(e.target.value)}></textarea>
            </p>
            <button>Set Project</button>
        </form>
    )

}

export default ProjectForm;