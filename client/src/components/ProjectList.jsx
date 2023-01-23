// import { useEffect, useState } from "react";
// import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from "./DeleteButton";
import { Paper, Card, CardContent } from '@material-ui/core'

const ProjectList = props => {
    const { projectList, removeProject } = props;
    return (
        projectList.length > 0 && [...projectList].sort((a, b) => a.title.localeCompare(b.title)).map((p, i) => {
            return (
                <div key={i} >
                    <Card key={i} elevation={20} style={{ margin: "20px" }}>
                        <CardContent>
                            <Link to={`/${p._id}`}>{p.title} </Link>
                            <br />
                            <Link to={`/edit/${p._id}`}>Edit</Link>
                            <DeleteButton projectId={p._id} successCallBack={() => removeProject(p._id)} />
                            <br />
                        </CardContent>
                    </Card>
                </div>
            )
        })
    )
}

export default ProjectList;

// (a,b) => a.title - b.title   [...projectList].sort( (a,b) => a.title - b.title);