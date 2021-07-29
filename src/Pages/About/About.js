import "./About.css"
import React from 'react'

const About = () => {
    return (
        <div className="container">
            <img src="https://osten-co.uz/images/index/about.jpg" alt="" className="img1"/>
           <div className="AboutMe">
                <h1 className="modern">MODERN LIFT SYSTEMS</h1>
                <p className="lift">Крупная лифтостроительная компания в Узбекистане!</p>
           </div>
        </div>
    )
}

export default About;