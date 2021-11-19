import React from 'react'
import Card from '../Card/Card'
import classes from "./Projects.module.css"
import axios from "../Admin/axios"
import { useEffect, useState } from "react";

function Projects() {
    const [projects, setProjects] = useState(false);

    useEffect(() => {
        const getProjects = async () => {
            const temp_projects = await axios.get("/getProjects");
            setProjects(temp_projects);
        }
        getProjects();
    }, [])
    return (
        <React.Fragment>
            {projects && <div className={classes.projects__container} id="projects">
                <div className={classes.projects__scroll}>
                    {projects.data.map((project) => (
                        <Card project_name={project.name}
                            project_img_src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                            project_description={project.description}
                            project_date={project.date}
                            project_link={project.link} />
                    ))}
                </div>
            </div>}
        </React.Fragment>
    )
}

export default Projects
