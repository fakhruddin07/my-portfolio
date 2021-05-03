import React from 'react';
import './TopBanner.css';
import resume from '../../images/Fakhruddin Ahmed(resume).pdf';
import Typical from 'react-typical';
import Particles from 'react-particles-js';


const TopBanner = () => {
    return (
        <div>
            <section class="bg-danger bg-gradient text-transparent">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="header-main">
                                <Particles
                                    params={{
                                        particles: {
                                            number: {
                                                value: 200,
                                                density: {
                                                    enable: true,
                                                    value_area: 1000,
                                                }
                                            },
                                        },
                                    }}
                                ></Particles>
                                <div className="text-center main-text">
                                    <h3>HELLO, I'M <span class="text-info">FAKHRUDDIN AHMED</span></h3>
                                    <h4>I'm a</h4>
                                    <h1 class="mb-5">
                                        <Typical
                                            loop={Infinity}
                                            wrapper="b"
                                            steps={['Front-End Web Developer',
                                            1000,
                                            'Learner',
                                            1000]}

                                        />
                                    </h1>
                                    <div class="text-center">
                                        <button class="btn btn-success me-3"><a href="#contact">CONTACT ME</a></button>
                                        <button class="btn btn-success"><a href={resume} download>Download Resume</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopBanner;