import React from 'react';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const About = ({ showLinks, setShowLinks, styles }) => {
    return (
        <div>
            <Navigation showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
            <AboutContent />
            <Footer />
        </div>
    );
};


export default About;