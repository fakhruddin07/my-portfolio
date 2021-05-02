import React from 'react';
import chanderHut from '../../images/NOMAN.jpg'

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
                                    <h5 class="card-title">The Mistake I Made As a Beginner</h5>
                                    <a href="https://link.medium.com/fUVNeEtiWfb?fbclid=IwAR2d7284lzlYl1SsyIyaAWoaXsBSD_32dQWYEdF8xzCSFyo8z7fbecxcPSI" class="btn btn-primary mb-3">Read</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title ">How to be a better react Developer</h5>
                                    <a href="https://link.medium.com/QvXm6nyjWfb?fbclid=IwAR25cHfGs35pkDd5bKOUmO5lCcftuo9Zs9h1vH6duehnK5NtDmrmoKNeLoE" class="btn btn-primary mb-3">Read</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src={chanderHut} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Learning How to Learn JavaScript</h5>
                                    <a href="https://link.medium.com/SpSOY0UjWfb?fbclid=IwAR2ZgZDp4KQedYh0s1cqMq7QHeDQP8BnU7oG7XYqrLLdQ47awvmSyv5gRFU" class="btn btn-primary mb-3">Read</a>
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