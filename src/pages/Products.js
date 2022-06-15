import React from 'react';
// import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Stocks } from '../Stocks';
import { stockData } from "../data";
import FeaturedProducts from '../components/FeaturedProducts';


const Products = ({ showLinks, setShowLinks, styles }) => {
    return (
        <div>
            <Navigation showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
            {/* <FeaturedProducts /> */}

            {stockData.map((data) => {
                return (
                    <>
                        <FeaturedProducts data={data} />
                    </>
                );
            })}
            <Footer />
        </div>
    );
};

export default Products;