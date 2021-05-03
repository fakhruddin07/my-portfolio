import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pic from "../../images/NOMAN.jpg"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from "../../images/Fakhruddin Ahmed(resume).pdf";
import "./About.css"

const About = () => {
    return (
        <>
            <section id="about" class="mb-5">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about text-center">
                                <h1 class="m-5">About Me</h1>
                                <img src={pic} class="img-fluid img-resize rounded-circle" alt="" />
                                <div class="mt-3 p-2 d-flex justify-content-center">
                                    <div class="me-3">
                                        <a target="_blank" class="btn btn-light" href="https://www.facebook.com/fakhruddin.ahmed.995"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                    </div>
                                    <div class="me-3">
                                        <a target="_blank" class="btn btn-light" href="https://github.com/fakhruddin07"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                    </div>
                                    <div class="me-3">
                                        <a target="_blank" class="btn btn-light" href="www.linkedin.com/in/fakhruddin-ahmed-2a5885193"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                    </div>
                                </div>
                                <h4>Hi, I'm Fakhruddin Ahmed & I'm a front-end developer. I actually studied in Mathematics but I've an interest in programming and developing. So I've decided last year that I need to learn and explore Coding and programming and developing. I started it and till now continue. My core skill is based on JavaScript and React.js and I love to do most of things using by JS. I have a serious passion for developing. I'm available for any kind of job opportunity that suits my skill and interest.</h4>
                                <div className="mt-3">
                                    <a href="#contact"><button class="btn btn-success me-3">Send Message</button></a>
                                    <button class="btn btn-success"><a href={resume} download>Download Resume</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default About;