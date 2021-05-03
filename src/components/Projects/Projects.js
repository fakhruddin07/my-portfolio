import React from 'react';
import cruise from '../../images/Cruise.PNG';
import epl from '../../images/epl.PNG';
import cooking from '../../images/cooking.PNG';
import dx from '../../images/dx.PNG';
import rides from '../../images/rides.PNG';
import img from '../../images/img.PNG';
import fix from '../../images/fix.PNG';


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
                                    <p class="card-text">It's a dummy website. On this website, you can book your tickets and  they have first class and economy. When you will book your tickets, it'll show you the confirmation of the ticket booking.</p>
                                    <a href="https://github.com/fakhruddin07/cruise-queen-assignment-4" class="btn btn-success mb-3">Github</a><br />
                                    <a href="https://fakhruddin07.github.io/cruise-queen-assignment-4/" class="btn btn-success">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={epl} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title ">English Premier League</h5>
                                    <p class="card-text">Here, on this website, you can see some football clubs. If you want to know about that club, go to this site and push the explore button. You can know about their history.</p>
                                    <a href="https://github.com/Porgramming-Hero-web-course/react-router-fakhruddin07" class="btn btn-success mb-3">Github</a><br />
                                    <a href="https://agitated-khorana-c98be9.netlify.app/" class="btn btn-success">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={cooking} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Cooking Master</h5>
                                    <p class="card-text">If you will search a list of foods by alphabetically this website will help you to find out that. Here details button of this site will help you see the food's gradients. It may easier to make a that kind delicious food at your home. </p>
                                    <a href="https://github.com/fakhruddin07/cooking-master-assignment-5" class="btn btn-success mb-3">Github</a><br />
                                    <a href="https://fakhruddin07.github.io/cooking-master-assignment-5/" class="btn btn-success">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={dx} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">DX F.C.</h5>
                                    <p class="card-text">If you build your  own football team, this site may be useful for you. On this site you can select a player for your team and also you can see how much money they earn yearly. When you select players, you can see a list name of players and their income.</p>
                                    <a href="https://github.com/Porgramming-Hero-web-course/simple-react-fakhruddin07" class="btn btn-success mb-3">Github</a><br />
                                    <a href="https://heuristic-villani-28ee26.netlify.app/" class="btn btn-success">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={rides} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">BD Rides</h5>
                                    <p class="card-text">I think this website is looking like Uber. But It has some difference between Uber and this site. On this website, you can choose your rides and go where ever do you want. The most important fact is that it's a dummy website.</p>
                                    <a href="https://github.com/Porgramming-Hero-web-course/react-auth-fakhruddin07" class="btn btn-success mb-3">Github</a><br />
                                    <a href="https://bd-rides-and-transportation.web.app/" class="btn btn-success">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={img} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Image Slider</h5>
                                    <p class="card-text">On this website, you can find lot of images if you search by category name. By helping this website you can make a images slide. You can select multiple image and set time duration for between two images. It's a dummy website.</p>
                                    <a href="https://github.com/fakhruddin07/fancy-slider-assignment-6" class="btn btn-success mb-3">Github</a><br />
                                    <a href="https://fakhruddin07.github.io/fancy-slider-assignment-6/" class="btn btn-success">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div class="card">
                                <img src={fix} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Fix Zone</h5>
                                    <p class="card-text">On this website, you can fix your appointment with a technician to fix your mobile, laptop, tab, smartwatch etc... It'll save users valuable time and users can also pick a suitable time.</p>
                                    <a href="https://github.com/Porgramming-Hero-web-course/complete-website-client-fakhruddin07" class="btn btn-success mb-3">Github</a><br />
                                    <a href="https://electronics-repair-services.web.app/" class="btn btn-success">Website</a>
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