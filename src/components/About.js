import React from "react";

function About() {
    return (
        <div>
            <p className="content is-medium">Technical Writer and Something-of-a Full Stack Developer</p>
            <hr />
            <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski" />
            <p className="content is-italic mt-4">
                I'm Amin, a automation developer, learning full stack development at the University of Texas at San Antonio to better my working and technical skills to advance in my career.
            </p>
            <p className="content">
                I try to stay in shape as best as I could. During my time at work I help develop a better Travel experience for a wide variety of customers and companies in order to identify and resolve any issues that arise within production.
            </p>
        </div>
    );
}

export default About;