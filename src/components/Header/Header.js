import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-color bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">I'M <span className="text-warning">FAKHRUDDIN AHMED</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#blogs">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#about">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;