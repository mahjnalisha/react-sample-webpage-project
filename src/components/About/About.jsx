import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src="" alt="" className="about-img" srcSet={about_img} />
                {/* <img src="" alt="" className="play-icon" srcSet={play_icon} /> */}
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>this is the educaiton website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aut dolorum recusandae maiores eius architecto facere rerum! Velit nulla iste laborum tempore deserunt voluptatibus et perferendis temporibus aliquam ea. Architecto?</p>
            </div>
        </div>
    )
}

export default About