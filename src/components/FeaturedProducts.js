import React from 'react';
// import Product1 from '../assets/product-1.jpg';
// import Product2 from '../assets/product-2.jpg';
// import Product3 from '../assets/product-3.jpg';
// import Product4 from '../assets/product-4.jpg';
// import Product5 from '../assets/product-5.jpg';
// import Product6 from '../assets/product-6.jpg';
// import Product7 from '../assets/product-7.jpg';
// import Product8 from '../assets/product-8.jpg';
// import Product9 from '../assets/product-9.jpg';
// import Product10 from '../assets/product-10.jpg';
// import Product11 from '../assets/product-11.jpg';
// import Product12 from '../assets/product-12.jpg';

const FeaturedProducts = ({ data }) => {

    console.log(`../assets/${data.image}`)
    return (
        <div className="col-4">
            {/* //                 <img className="image_product" src={Product1} alt="product 1" /> */}
            <h3> {data.name} </h3>
            {/* //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 15,00€ </p> */}
        </div>


        // <section className="featured-products">
        //     <div className="container">
        //         <h2> All our products </h2>
        //         <div className="row">
        //             
        //             <div className="col-4">
        //                 <img className="image_product" src={Product2} alt="product 2" />
        //                 <h3> HRX black baskets </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 40,00€ </p>
        //             </div>
        //             <div className="col-4">
        //                 <img className="image_product" src={Product3} alt="product 3" />
        //                 <h3> Adidas grey baskets </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 60,00€ </p>
        //             </div>
        //             <div className="col-4">
        //                 <img className="image_product" src={Product4} alt="product 4" />
        //                 <h3> Puma blue T-shirt </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 25,00€ </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-4">
        //                 <img className="image_product" src={Product5} alt="product 5" />
        //                 <h3> HRX grey baskets </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 50,00€ </p>
        //             </div>
        //             <div className="col-4">
        //                 <img className="image_product" src={Product6} alt="product 6" />
        //                 <h3> Puma black T-shirt </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 20,00€ </p>
        //             </div>
        //             <div className="col-4">
        //                 <img className="image_product" src={Product7} alt="product 7" />
        //                 <h3> HRX 3 darks colors sockets </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 15,00€ </p>
        //             </div>
        //             <div className="col-4">
        //                 <img className="image_product" src={Product8} alt="product 8" />
        //                 <h3> Armani black watch </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 135,00€ </p>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-4">
        //                 <img className="image_product" src={Product9} alt="product 9" />
        //                 <h3> Diesel black and yellow watch </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 110,00€ </p>
        //             </div>
        //             <div className="col-4">
        //                 <img className="image_product" src={Product10} alt="product 10" />
        //                 <h3> HRX black and red baskets </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 35,00€ </p>
        //             </div>
        //             <div className="col-4">
        //                 <img className="image_product" src={Product11} alt="product 11" />
        //                 <h3> HRX light grey baskets </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 30,00€ </p>
        //             </div>
        //             <div className="col-4">
        //                 <img className="image_product" src={Product12} alt="product 12" />
        //                 <h3> HRX black jogging </h3>
        //                 <div className="rating">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star" aria-hidden="true"></i>
        //                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
        //                     <i className="fa fa-star-o" aria-hidden="true"></i>
        //                 </div>
        //                 <p> 35,00€ </p>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default FeaturedProducts;