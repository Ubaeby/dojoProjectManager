import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from "./DeleteButton";

const ProjectList = props => {
    const {projectList, removeProject} = props;

    return (
        projectList.length > 0 && projectList.map( (p, i) => {
            return (
                <div key={i} >
                    <Link to={`/project/${p._id}`}> {p.title} </Link>
                    <Link to={`/project/edit/${p._id}`}>Edit</Link>
                    <DeleteButton projectId = {p._id} successCallBack={ () => removeProject(p._id)}/>
                </div>
            )
        })
    )
}

export default ProjectList;