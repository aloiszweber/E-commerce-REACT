import React from 'react';
import BasketContent from '../components/BasketContent';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Basket = ({ showLinks, setShowLinks, styles }) => {
    return (
        <div>
            <Navigation showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
            <BasketContent />
            <Footer />
        </div>
    );
};

export default Basket;