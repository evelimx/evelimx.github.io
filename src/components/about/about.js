import React from "react";
import { Link } from 'react-router-dom';
import Profile from './profile.JPG';

const About = () => (
    <div className="about-container">
        <div className="self-description-container">
            <div className="my-name">
                Eve Mingxiao Li
            </div>
            <div className="paragraph">
                <p>I am a master's student in the <a href="https://www.dgp.toronto.edu/" target="_blank">Dynamic Graphics Project lab</a> of the University of Toronto, advised by <a href="https://www.tovigrossman.com/" target="_blank">Prof. Tovi Grossman</a> and <a href="https://mauriciosousa.github.io/" target="_blank">Dr. Maurício Sousa</a>.</p>
                Before joining DGP, I completed my Bachelor’s degree in Computer Science at the University of Waterloo.
            </div>
            <div className="paragraph">
                <div>Please find my CV <Link to="CV.pdf" target="_blank">here</Link>. </div>
            </div>
            <div className="paragraph">
                <div className="semibold">
                    Research interests:
                </div>
                <div>Human-Computer Interaction, User Interface, VR/AR</div>
            </div>
        </div>
        <img src={Profile} />
    </div>
);

export default About;