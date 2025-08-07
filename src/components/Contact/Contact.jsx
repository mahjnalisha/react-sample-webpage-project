import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='left-section'>
                <div className='address'>
                    <h3>Contact Details</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In cum sint dolorem praesentium eaque molestias, perspiciatis harum suscipit quidem laudantium, mollitia provident ipsum possimus ducimus eum sequi excepturi enim corporis.</p>
                    <ul>
                        <li> Email: alisha@gmail.com</li>
                        <li>Phone Number:******</li>

                    </ul>
                </div>
            </div>
            <div className="right-section">
                <form action="">
                    <div className='form-group'>
                        <label for="input">Name</label>
                        <input type="text" required />
                    </div>
                    <div className='form-group'>
                        <label for="input">Email</label>
                        <input type="text" required />
                    </div>
                    <div className='form-group'>
                        <label for="input">Phone</label>
                        <input type="text" required />
                    </div>
                    <div className='form-group'>
                        <label for="input">Message</label>
                        <textarea name="" id="" rows={5} required></textarea>
                    </div>
                    <button type="submit" className='btn darkbtn'> Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact