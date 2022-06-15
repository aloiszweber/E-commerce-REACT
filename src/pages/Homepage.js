import React from 'react';
import BestProducts from '../components/BestProducts';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';


const Homepage = ({ showLinks, setShowLinks, styles }) => {


    return (
        <div>
            <Navigation showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
            <Header />
            <Categories />
            <BestProducts />
            <Footer />
        </div >
    );
};



export default Homepage;