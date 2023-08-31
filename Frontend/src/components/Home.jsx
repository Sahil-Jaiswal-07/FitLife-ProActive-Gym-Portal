import React from 'react'
import Navbar from './Navbar';
import vid from '../assets/NewIntro2.mp4';
import hero from '../assets/floor.jpg';
import Footer from './Footer';
import { FaAngleDown } from 'react-icons/fa';
import AboutHome from './AboutHome';

const Home = () => {
    return (
        <main>
            <Navbar />
            <header className="header-section" onContextMenu={e => e.preventDefault()}>
                {/* <video autoPlay playsInline muted loop className="hero-video">
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video. Sorry for the inconvenience.
                </video> */}

                <img src="https://marketplace.canva.com/EAE9Rc7pY8Y/1/0/1600w/canva-black-and-blue-simple-man-barbell-workout-background-tTC5sROo0hQ.jpg" style={{width: "100%",height:"100%"}}/>

            </header>
            <div id="about">
                <AboutHome />
            </div>
            <Footer />
        </main>
    )
}

export default Home
