import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>
                    We Ensure better education for the better world.
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, perferendis aliquid excepturi error commodi exercitationem eveniet molestias cupiditate totam officia earum culpa ullam numquam minus expedita natus corporis voluptas?</p>
                <button className="btn">Explore more <img alt="" src={arrow} className='arrow' /></button>
            </div>
        </div>
    )
}

export default Hero