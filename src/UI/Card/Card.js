import React from 'react'
import classes from "./Card.module.css"

function Card(props) {
    return (
        <div>
            <a href="#" className={classes.card__container}>
                <img src={props.project_img_src} />
                <div className={classes.card__info}>
                    <h3>{props.project_title}</h3>
                    <p>{props.project_description}</p>
                    <p>11 Nov 2021</p>
                    <div></div>
                </div>
            </a>
        </div>
    )
}

export default Card
