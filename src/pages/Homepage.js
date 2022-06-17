import React, { useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { stockData } from "../data";
import ProductsComponent from '../components/ProductsComponent';

const Homepage = ({ showLinks, setShowLinks, styles }) => {

    const popup = useRef(null);

    function enter() {
        popup.current.style.display = "none";
    }

    function quit() {
        window.close();
    }

    return (
        <div>
            <div ref={popup} class="popup" id="active">
                <h3> New Style </h3>
                <div class="contentPopup">
                    <p> This site needs a lot of resources to facilitate the purchase of consumers. This work is based on the
                        complementary income
                        from advertising cookies and subscriptions. You can therefore :</p>
                    <br />
                    <p> Free access by accepting the use of cookies. </p>

                    <p> Free access to the site (excluding exclusive subscriber content) is subject to your consent to the use
                        of cookies, especially for advertising personalization, or similar technologies by New Style and third
                        party partners. You may withdraw your consent at any time. </p>
                    <br />
                    <p> What is a cookie ? </p>
                    <br />
                    <p> Subscribe to New Style to enjoy all the content. Access to the site with a subscription allows you to
                        access to all New Style content and archives from our website and mobile applications. By clicking on
                        the
                        button " Cancel ", you will be able to refuse the cookies (except operating and audience measurement
                        cookies). </p>
                    <button onClick={enter} id="continueButton" style={{ marginTop: '30px', backgroundColor: '#00d0e5' }}> Accept and continue
                    </button>
                    <button onClick={quit} id="cancelButton" style={{ backgroundColor: 'rgb(255, 88, 88)', opacity: '0.55' }}> Cancel
                    </button>
                </div>
            </div>
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