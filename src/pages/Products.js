import React from 'react';
import AllProducts from '../components/AllProducts';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { stockData } from "../data";


const Products = ({ showLinks, setShowLinks, styles }) => {
    return (
        <div>
            <Navigation showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
            <section className="featured-products">
                <div className="container">
                    <h2> All our products </h2>
                    <div className="row">
                        {stockData.map((data) => {
                            return (
                                <>
                                    <AllProducts data={data} />
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Products;