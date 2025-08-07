import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'

const NavBar = () => {
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])


    return (
        <div className={`header   ${sticky === true ? 'dark-nav' : ''}`}>
            <img alt="" srcSet={logo} className='logo' />
            <ul className='nav'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar