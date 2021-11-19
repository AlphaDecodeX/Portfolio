import React from 'react'
import classes from "./About.module.css"

function About() {
    return (
        <div className={classes.about__container} id="about">
            <div className={classes.center__container}>
                <h1>HELLO THERE</h1>
                <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" />
                <p>Always ready to learn things which fascinate me, especially automating things is my first choice. I tried in many fields like Hacking, Web Development, Machine Learning, Data Analysis, and Cross-Platform App Development, and love to go forward in the AI field.
                    And Yes, Reading fiction is my Hobby.</p>
            </div>
        </div>
    )
}

export default About
