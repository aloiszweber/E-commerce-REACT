import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { stockData } from "../data";
import ProductsComponent from '../components/ProductsComponent';


const Homepage = ({ showLinks, setShowLinks, styles }) => {


    return (
        <div>
            <Navigation showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
            <Header />
            <section className="featured-products">
                <div className="container">
                    <h2> Best products </h2>
                    <div className="row">
                        {stockData.map((data) => {
                            if (data.id < 5) {
                                return (
                                    <>
                                        <ProductsComponent data={data} />
                                    </>
                                );
                            }
                        })}
                    </div>
                </div>
                <section className="featured-products">
                    <div className="container">
                        <h2> Last products </h2>
                        <div className="row">
                            {stockData.map((data) => {
                                if (data.id > 4) {
                                    return (
                                        <>
                                            <ProductsComponent data={data} />
                                        </>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </section>
            </section>

            <Footer />
        </div >
    );
};



export default Homepage;