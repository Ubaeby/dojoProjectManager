import axios from "axios";

const DeleteButton = props => {
    const {projectId, successCallBack} = props;
    const deleteProject = e => {
        axios.delete('http://localhost:8000/api/project/' + projectId)
            .then(res => {
                successCallBack();
            })
    }

    return (
        <button onClick={deleteProject}>
            Delete
        </button>
    )
}

export default DeleteButton;