import React from 'react'
import Button from '../Button/Button'
import classes from "./Home.module.css"
function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.home__info}>
                <p>Welcome to my World</p>
                <h1>I'm Lovepreet Singh</h1>
                <h4>BlockChain and AI Developer</h4>
            </div>
            <div className={classes.home__buttons}>
                <Button className={classes.home__firstButton}>CONTACT ME</Button>
                <Button className={classes.home__secondButton}>PROJECTS</Button>
            </div>
            <div className={classes.home__image}>
                <img src="https://media.istockphoto.com/photos/mature-handsome-business-man-picture-id1040308104?k=20&m=1040308104&s=612x612&w=0&h=zZOpj7CCxprdPAMkeGJP7RW76_7TpfKA2BZSOm8hZvY=" />
            </div>
        </div>
    )
}

export default Home
