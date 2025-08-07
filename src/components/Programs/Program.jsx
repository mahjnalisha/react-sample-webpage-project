import React from 'react'
import './Program.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programicon1 from '../../assets/program-icon-1.png'
import programicon2 from '../../assets/program-icon-2.png'
import programicon3 from '../../assets/program-icon-3.png'

export const Program = () => {
    return (
        <div className="programs">
            <div className="program">
                <img srcSet={program1} alt="" />
                <div className="caption">
                    <img srcSet={programicon1} alt="" /> <p>Graduation</p>
                </div>
            </div>
            <div className="program">
                <img srcSet={program2} alt="" />
                <div className="caption">
                    <img srcSet={programicon2} alt="" /> <p>Graduation</p>
                </div>
            </div>
            <div className="program">
                <img srcSet={program3} alt="" />
                <div className="caption">
                    <img srcSet={programicon3} alt="" /> <p>Graduation</p>
                </div>
            </div>
        </div>
    )
}
