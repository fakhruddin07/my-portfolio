import React from 'react';
import chanderHut from '../../images/NOMAN.jpg';

const Blogs = () => {
    return (
        <>
            <section id="blogs" class="my-5">
                <h1 class="text-center mb-5">Blogs</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Chander Hut</h5>
                                    <a href="#" class="btn btn-primary mb-3">Read</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title ">Repair Hut</h5>
                                    <a href="#" class="btn btn-primary mb-3">Read</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">City Ride</h5>
                                    <a href="#" class="btn btn-primary mb-3">Read</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;