import React from 'react';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Contact = ({ showLinks, setShowLinks, styles }) => {
    return (
        <div>
            <Navigation showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
            <ContactContent />
            <Footer />
        </div>
    );
};

export default Contact;