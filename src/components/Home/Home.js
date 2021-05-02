import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            <Header></Header>
            <TopBanner></TopBanner>
            <Projects></Projects>
            <Blogs></Blogs>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;