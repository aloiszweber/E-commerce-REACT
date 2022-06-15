import React from 'react';
import Product1 from '../assets/product-1.jpg';
import Product2 from '../assets/product-2.jpg';
import Product3 from '../assets/product-3.jpg';
import Product4 from '../assets/product-4.jpg';

const BestProducts = () => {
    return (
        <section className="featured-products">
            <div className="container">
                <h2> Best products </h2>
                <div className="row">
                    <div className="col-4">
                        <img className="image_product" id="product1" src={Product1} alt="product 1" />
                        <h3> Puma red T-shirt </h3>
                        <div className="rating">
                            <i className="fa fa-star" aria-hidden="true"> </i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                        <p> 15,00€ </p>
                    </div>
                    <div className="col-4">
                        <img className="image_product" id="product2" src={Product2} alt="product 2" />
                        <h3> HRX black baskets </h3>
                        <div className="rating">
                            <i className="fa fa-star" aria-hidden="true"> </i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                        <p> 40,00€ </p>
                    </div>
                    <div className="col-4">
                        <img className="image_product" id="product3" src={Product3} alt="product 3" />
                        <h3> Adidas grey baskets </h3>
                        <div className="rating">
                            <i className="fa fa-star" aria-hidden="true"> </i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        </div>
                        <p> 60,00€ </p>
                    </div>
                    <div className="col-4">
                        <img className="image_product" id="product4" src={Product4} alt="product 4" />
                        <h3> Puma blue T-shirt </h3>
                        <div className="rating">
                            <i className="fa fa-star" aria-hidden="true"> </i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                        <p> 25,00€ </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestProducts;