import React from 'react'
import classes from "./Card.module.css"

function Card(props) {
    console.log("Props are ", props);
    return (
        <div>
            <a href="#" className={classes.card__container}>
                <img src={props.project_img_src} />
                <div className={classes.card__info}>
                    <h3>{props.project_name}</h3>
                    <p>{props.project_description}</p>
                    <p>{props.project_date}</p>
                    <div></div>
                </div>
            </a>
        </div>
    )
}

export default Card
