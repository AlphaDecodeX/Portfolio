import classes from "./Admin.module.css"
import React from 'react'
import { useState, useRef } from "react";
import Button from "../Button/Button"
import axios from "./axios"

function Admin() {
    const nameRef = useRef();
    const descRef = useRef();
    const linkRef = useRef();
    const dateRef = useRef();

    const addProjectHandler = async (event) => {
        event.preventDefault();
        const res = await axios.post("/addProject", {
            name: nameRef.current.value,
            description: descRef.current.value,
            link: linkRef.current.value,
            date: dateRef.current.value
        });
        nameRef.current.value = "";
        descRef.current.value = "";
        linkRef.current.value = "";
        dateRef.current.value = "";
        return;
    }

    const removeProjectHandler = async (event) => {
        event.preventDefault();
        const res = await axios.post("/removeProject", {
            name: nameRef.current.value,
        });
        nameRef.current.value = "";
        descRef.current.value = "";
        linkRef.current.value = "";
        dateRef.current.value = "";
        return;
    }


    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <input type="text" placeholder="Name" ref={nameRef} />

                <input type="text" placeholder="Description" ref={descRef} />

                <input type="text" placeholder="Link" ref={linkRef} />

                <input type="text" placeholder="Date" ref={dateRef} />
            </form>

            <button className={classes.firstButton} onClick={addProjectHandler}>Add Project</button>
            <button className={classes.secondButton} onClick={removeProjectHandler}>Remove Project</button>

            <p>* To Remove any Project. Enter Name Only</p>
        </div>
    )
}

export default Admin;
