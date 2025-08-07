import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
    // const slider =useF
    // let tx = 0;
    // const slideForward = () => {
    //     if (tx > -50) {
    //         tx -= 25;
    //     }
    //     slider.current.style.transform = `translateX(${tx}%)`
    // }
    // const slideBackward = () => {
    //     if (tx < 0) {
    //         tx += 25;
    //     }
    //     slider.current.style.transform = `translateX(${tx}%)`
    // }
    return (
        <>
            {/* <div className='testimonials'>
                <img alt="" srcSet={next_icon} className='next-icon' />
                <img alt="" srcSet={back_icon} className='back-icon' />
            </div> */}
            <div className="users sliders">
                <ul >
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img alt="" srcSet={user1} />
                                <div>
                                    <h3>Wiliam </h3>
                                    <span>Year 2023</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente reprehenderit, eaque error sequi numquam magnam, esse cum minus quaerat cumque praesentium nulla! Fuga sit, omnis vero tempora odit ad?</p>


                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img alt="" srcSet={user3} />
                                <div>
                                    <h3>
                                        Wiliam </h3><br></br>
                                    <span>Year 2023</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente reprehenderit, eaque error sequi numquam magnam, esse cum minus quaerat cumque praesentium nulla! Fuga sit, omnis vero tempora odit ad?</p>


                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img alt="" srcSet={user2} />
                                <div>
                                    <h3>
                                        Wiliam </h3>
                                    <span>Year 2023</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img alt="" srcSet={user4} />
                                <div>
                                    <h3>
                                        Wiliam </h3>
                                    <span>Year 2023</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente reprehenderit, eaque error sequi numquam magnam, esse cum minus quaerat cumque praesentium nulla! Fuga sit, omnis vero tempora odit ad?</p>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente reprehenderit, eaque error sequi numquam magnam, esse cum minus quaerat cumque praesentium nulla! Fuga sit, omnis vero tempora odit ad?</p>


                        </div>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default Testimonials