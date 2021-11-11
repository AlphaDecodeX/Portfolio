import React from 'react'
import classes from "./Nav.module.css";

function Nav() {

    return (
        <div className={classes.navbar__container} >
            <ul className={classes.navbar__list}>
                <div className={classes.navbar__home}>
                    <li><a href="#">HOME</a></li>
                </div>

                <div className={classes.navbar__others}>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="#">ABOUT ME</a></li>
                    <li><a href="#">CONTACT ME</a></li>
                </div>
            </ul>
        </div>
    )
}

export default Nav
