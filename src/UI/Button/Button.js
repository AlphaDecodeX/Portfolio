import React from 'react'
import classes from "./Button.module.css"

function Button(props) {
    return (
        <div className={`${classes.button} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Button
