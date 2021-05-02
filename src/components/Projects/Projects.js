import React from 'react';
import cruise from '../../images/Cruise.PNG';
import epl from '../../images/epl.PNG'
import chanderHut from '../../images/NOMAN.jpg'


const Projects = () => {
    return (
        <>
            <section id="projects" className="mb-5">
                <h1 class="text-center mt-5 mb-4">Projects</h1>
                <div className="container">
                    <div className="row my-3 mb-sm-5">
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={cruise} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Cruise Queen</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://github.com/fakhruddin07/cruise-queen-assignment-4" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="https://fakhruddin07.github.io/cruise-queen-assignment-4/" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={epl} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title ">English Premier League</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://github.com/Porgramming-Hero-web-course/react-router-fakhruddin07" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="https://agitated-khorana-c98be9.netlify.app/" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">City Ride</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="#" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">City Ride</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="#" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">City Ride</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="#" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">City Ride</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary mb-3">Github</a><br />
                                    <a href="#" class="btn btn-primary">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;