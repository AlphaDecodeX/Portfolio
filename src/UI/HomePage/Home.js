import React from 'react'
import Button from '../Button/Button'
import classes from "./Home.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.home__info}>
                <p>Welcome to my World</p>
                <h1>I'm Lovepreet Singh</h1>
                <h4>BlockChain and AI Developer</h4>
                <div className={classes.icons}>
                    <GitHubIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>
            </div>
            <div className={classes.home__buttons}>
                <Button className={classes.home__firstButton}>CONTACT ME</Button>
                <Button className={classes.home__secondButton}>PROJECTS</Button>
            </div>
            <div className={classes.home__image}>
                <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" />
            </div>
        </div>
    )
}

export default Home
