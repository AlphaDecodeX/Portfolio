import React from 'react'
import classes from "./About.module.css"

function About() {
    return (
        <div className={classes.about__container}>
            <div className={classes.center__container}>
                <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" />
                <p> a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need
                    the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

                    Search for the keywords to learn more about each warning.
                    To ignore, add // eslint-disable-next-line to the line before.</p>
            </div>
        </div>
    )
}

export default About
